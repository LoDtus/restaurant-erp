/**
 * Sửa lại các lỗi báo đỏ
 * Config để chấp nhận any
 * Sửa lại giao diện cho đẹp hơn
 * Sửa lại để video chạy, dừng với cả các video không phải video live
 * Nếu là video live thì cần đảm bảo làm sao khi video chạy thì là chạy video mới nhất, thay vì là chạy phần đang dừng trước đó
 */

'use client';
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import '@videojs/http-streaming';
import 'video.js/dist/video-js.css';

// Lấy type PlayerOptions từ chữ ký hàm videojs()
type VjsPlayerOptions = Parameters<typeof videojs>[1];

// Lấy type Player Instance
const Player = videojs.getComponent('Player');
type VideoJsPlayer = InstanceType<typeof Player>;

interface VideoPlayerProps {
    url: string;
    isLive: boolean;
}

const videoJsOptions: VjsPlayerOptions = {
    autoplay: true, // Giữ autoplay mặc định, nhưng IO sẽ kiểm soát hành vi này
    controls: true,
    responsive: true,
    fluid: true,
    preload: 'auto',
    liveui: true,
    html5: {
        vhs: {
            withCredentials: false,
            overrideNative: true,
        },
    },
    controlBar: {
        pictureInPictureToggle: false,
    },
};

export default function VideoPlayer({ url, isLive }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<VideoJsPlayer | null>(null);

    // --- LOGIC KHỞI TẠO VÀ CẤU HÌNH PLAYER (Đã có) ---
    useEffect(() => {
        if (!videoRef.current) return;

        const finalOptions: VjsPlayerOptions = {
            ...videoJsOptions,
            sources: [{
                src: url,
                type: isLive ? 'application/x-mpegURL' : 'video/mp4',
            }],
        };

        if (isLive) {
            finalOptions.controlBar = {
                children: [
                    'VolumePanel',
                    'LiveDisplay',
                    'FullscreenToggle'
                ],
                pictureInPictureToggle: false,
            };
        }

        if (!playerRef.current) {
            const player = playerRef.current = videojs(videoRef.current, finalOptions, () => {
                console.log('Video.js player ready');
            });

            if (isLive) {
                player.ready(() => {
                    player.addClass('vjs-live');

                    const controlBar = (player as any).controlBar;

                    if (controlBar && controlBar.progressControl) {
                        const seekBar = controlBar.progressControl.seekBar;
                        if (seekBar && 'disable' in seekBar) {
                            (seekBar as any).disable();
                        }
                    }
                });
            }

            player.on('error', () => {
                console.error('Video.js Error:', player.error());
            });

        } else {
            playerRef.current.src({
                src: url,
                type: isLive ? 'application/x-mpegURL' : 'video/mp4',
            });
        }

        return () => {
            if (playerRef.current && !playerRef.current.isDisposed()) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [url, isLive]);

    // --- LOGIC TỰ ĐỘNG PHÁT KHI CUỘN (CHỈ DÀNH CHO LIVE) ---
    useEffect(() => {
        if (!isLive || !videoRef.current || !playerRef.current) {
            return;
        }

        const videoElement = videoRef.current;
        const player = playerRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Kiểm tra xem phần tử có nằm trong khung nhìn không
                if (entry.isIntersecting) {
                    // Nếu cuộn tới, gọi play()
                    if (player.paused()) {
                        player.play();
                    }
                } else {
                    // Nếu cuộn qua, gọi pause()
                    if (!player.paused()) {
                        player.pause();
                    }
                }
            },
            {
                // root: null (mặc định là viewport),
                // Ngưỡng: 50% (50% video phải nằm trong viewport mới tính là "Intersecting")
                threshold: 0.5,
            }
        );

        // Bắt đầu quan sát phần tử video
        observer.observe(videoElement);

        // Dọn dẹp Intersection Observer khi component bị unmount hoặc isLive thay đổi
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
            // Đảm bảo video được tạm dừng khi rời khỏi trang
            if (player && !player.paused()) {
                player.pause();
            }
        };
    }, [isLive, playerRef.current, videoRef.current]);

    return (
        <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
                ref={videoRef}
                className="video-js vjs-big-play-centered vjs-default-skin"
                playsInline
            />

            {isLive && (
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse shadow-lg">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    LIVE
                </div>
            )}
        </div>
    );
}
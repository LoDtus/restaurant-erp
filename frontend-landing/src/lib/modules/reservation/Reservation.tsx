import { useState } from "react";
import VideoPlayer from "../shared/VideoPlayer";

export default function Reservation() {
    const BRANCHES = [1,1,1,1,1];
    const [curBranch, setCurBranch] = useState(0);

    return (
        <div>
            <h1 className="text-2xl font-semibold">Đặt bàn</h1>

            <ul className="flex items-center">
                {BRANCHES?.map((branch, branchIndex) => {
                    return (
                        <li
                            key={branchIndex}
                            className="py-1 px-2 font-semibold border rounded-sm
                                cursor-pointer duration-200 active:scale-95
                            "
                            onClick={() => setCurBranch(branchIndex)}
                        >
                            {`Chi nhánh ${branchIndex + 1}`}
                        </li>
                    );
                })}
            </ul>

            <div className="flex">
                <VideoPlayer
                    url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                    isLive={true}
                />

                <div>
                    {/* Thông tin */}
                </div>
            </div>
        </div>
    );
};
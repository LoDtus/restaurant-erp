import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-2/3 h-full p-3">
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <Swiper
                        className="w-full h-full"
                        spaceBetween={10}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img
                                className='w-full h-full object-cover'
                                src="/images/bg-example-1.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='w-full h-full object-cover'
                                src="/images/bg-example-2.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='w-full h-full object-cover'
                                src="/images/bg-example-3.jpg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="w-1/3 h-full bg-white flex justify-center items-center">
                <Outlet/>
            </div>
        </div>
    );
};
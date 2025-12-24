import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function AuthLayout() {
    const navigate = useNavigate();

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
                <button
                    className="absolute top-3 right-3 w-6 h-6 flex justify-center items-center text-dark-gray
                        duration-200 transition hover:text-black active:scale-95
                    "
                    onClick={() => navigate("/")}
                >
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                <Outlet/>
            </div>
        </div>
    );
};
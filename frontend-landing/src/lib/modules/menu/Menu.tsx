"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import QuantityButton from "../shared/QuantityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBookmark as faBookmarkFill } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmark } from "@fortawesome/free-regular-svg-icons";

/**
 * Keyword: Menu Desing
 * Gợi ý: Nếu có thể thiết kế để người dùng có thể thấy được thứ mình nhìn không khác gì một menu ngoài đời thay vì
 * giao diện kỹ thuật số thì càng tốt
 */

/**
 * Các thông tin cần cho vào mỗi item (Bổ sung nếu có thể):
 * - Opt: Sao
 */

/**
 * Sử dụng Image để downscale ảnh
 * 
 */

export default function Menu() {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const sizeList = ["Bé", "Vừa", "Lớn"];
    const typeFood = ["Đồ ăn", "Đồ ăn kèm", "Đồ uống"];
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);

    const handleQuantityUpdate = (newQuantity: number) => {
        setCurrentQuantity(newQuantity);
        console.log(`[App.tsx] Số lượng đã được cập nhật ngay lập tức: ${newQuantity}`);
    };

    const startGetMoreMenu = async () => {

    }

    useEffect(() => {

    }, []);

    return (
        <div>
            <ul className="px-2 flex itesm-center">
                {typeFood?.map((type, typeIndex) => {
                    return (
                        <li
                            key={typeIndex}
                            className={`py-1 px-5 font-semibold border rounded-md
                                cursor-pointer duration-200 transition active:scale-98
                                ${ typeIndex > 0 && 'ml-2' }
                            `}
                        >
                            {type}
                        </li>
                    )
                })}
            </ul>

            <ul className="flex flex-wrap p-1">
                {arr?.map((item, itemIndex) => {
                    // Thêm STT cho từng món ăn
                    return (
                        <li
                            key={itemIndex}
                            className='basis-1/3 px-1 py-1'
                        >
                            <article
                                className="relative p-5 border rounded-md
                                    cursor-pointer duration-200 hover:shadow-md
                                "
                            >
                                <span
                                    className="absolute top-3 left-3 w-[30px] aspect-square
                                        flex justify-center items-center
                                        font-semibold text-white bg-red-500
                                        border rounded-full
                                    "
                                >
                                    {itemIndex + 1}
                                </span>

                                <div className="w-full p-2 flex justify-center">
                                    <Image
                                        src={itemIndex % 2 === 0
                                            ? "/images/noodle-1.png"
                                            : "/images/noodle-3.png"
                                        }
                                        alt={"Phở tái chín"}
                                        width={300} height={300}
                                    />
                                </div>
                                {/* 
                                    <button
                                        className="absolute right-1"
                                    >
                                        Tim
                                    </button>
                                */}

                                <div className="flex justify-between items-center border-b">
                                    <h3 className="font-semibold text-2xl">Phở tái chín</h3>
                                    <span className="px-3 pt-0.5 text-sm font-semibold text-white bg-red-500 border rounded-md">
                                        35.000<span className="underline">đ</span>
                                    </span>
                                </div>
                                <p className="mt-1">Phở, Nước dùng, Thịt chín, Thịt tái, Hành</p>

                                <div className="mt-2 flex justify-between">
                                    <div>
                                        {sizeList?.map((size, sizeIndex) => {
                                            return (
                                                <button
                                                    key={sizeIndex}
                                                    className={`py-0.5 px-3 font-semibold border rounded-sm
                                                        duration-200 active:scale-98
                                                        ${sizeIndex > 0 && "ml-1"}
                                                    `}
                                                >
                                                    {size}
                                                </button>
                                            )
                                        })}
                                    </div>
                                    <span
                                        className="py-0.5 px-3 border rounded-full"
                                    >
                                        300g
                                    </span>
                                </div>

                                <div className="flex justify-between items-center my-2">
                                    <QuantityButton
                                        onQuantityChange={handleQuantityUpdate}
                                        maxQuantity={20}
                                        initialQuantity={currentQuantity}
                                    />

                                    <div className="flex items-center">
                                        <button
                                            className="shrink-0 px-1 py-[5px] aspect-square border rounded-sm
                                                duration-200 active:scale-98
                                            "
                                        // onClick={() => {}}
                                        >
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </button>
                                        <button
                                            className="shrink-0 ml-2 px-2 py-[5px] aspect-square border rounded-sm
                                                duration-200 active:scale-98
                                            "
                                        // onClick={() => {}}
                                        >
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    className="w-full px-5 py-2 bg-green-500 font-semibold text-white rounded-sm
                                        duration-200 active:scale-98
                                    "
                                >
                                    Đặt ngay
                                </button>
                            </article>
                        </li>
                    )
                })}
            </ul>

            <button
                className=""
                onClick={() => startGetMoreMenu()}
            >
                Xem thêm
            </button>
        </div>
    );
};
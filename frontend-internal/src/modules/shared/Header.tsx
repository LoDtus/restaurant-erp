import { Input } from "antd";
import { useEffect, useState } from "react";

export default function Header() {
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        console.log(keyword)
    }, [keyword]);

    return (
        <div className="sticky top-0 p-2 flex justify-between items-center border-b border-gray-line bg-white">
            <h1 className="font-semibold text-2xl">Longvi Restaurant</h1>
            <div className="flex items-center">
                <Input
                    className=""
                    placeholder="Tìm kiếm"
                    allowClear
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button>
                    {/* noti */}
                </button>
                <button>
                    {/* setting */}
                </button>
            </div>
        </div>
    );
};
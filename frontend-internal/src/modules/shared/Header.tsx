import { Input } from "antd";

export default function Header() {
    return (
        <div>
            <h1>Longvi Restaurant</h1>
            <div className="flex">
                <Input
                    className=""
                    placeholder="Tìm kiếm"
                    allowClear
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
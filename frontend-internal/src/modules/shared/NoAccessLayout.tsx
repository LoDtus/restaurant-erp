import { Button } from "antd";
import { useNavigate } from "react-router-dom";

// Chọn ra một màu nền đồng bộ, chọn một màu đậm hơn 1 chút chút cho "Lỗi 403" như đang dùng
export default function NoAccessLayout() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#a9bf5d]">
            <span className="font-bold! text-[100px] text-[#5f7816]">Lỗi 403</span>
            <span className="mb-3 font-semibold text-2xl">Bạn không thể truy cập vào đây</span>
            <p>Chức năng này chưa được phát triển hoặc bạn đang không có quyền sử dụng chức năng này.</p>

            <Button
                type="primary"
                className="mt-10 px-12! py-5! text-lg! font-semibold! shadow-md!"
                onClick={() => navigate("/")}
            >
                Quay lại trang chủ
            </Button>
        </div>
    );
};
import { Button, Input, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text, Link } = Typography;

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const startSendEmail = async() => {
        // Kiểm tra định dạng email

        navigate("/auth/reset-password")
    }

    return (
        <div className="w-full p-12 flex flex-col">
            <h1 className="font-semibold text-2xl text-center">Bạn đã quên mật khẩu?</h1>
            <Text className='mb-3 text-center'>Đừng lo, chúng tôi sẽ giúp bạn thiết lập lại mật khẩu</Text>

            <Text className='font-semibold!'>Email của bạn</Text>
            <Input
                className=''
                placeholder='example@mail.com'
                onBlur={(e) => setEmail(e.target.value)}
            />

            <Button
                className='font-semibold! mt-3'
                type='primary'
                onClick={() => startSendEmail()}
            >
                Nhận email hướng dẫn
            </Button>

            <Button
                className='font-semibold! mt-1'
                onClick={() => navigate("/auth/sign-in")}
            >
                Quay lại trang đăng nhập
            </Button>
        </div>
    );
};
import { Button, Input, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const DEFAULT_FORM = {
    password: "",
    confirmPassword: "",
}

export default function ResetPassword() {
    const navigate = useNavigate();
    const [form, setForm] = useState(DEFAULT_FORM);

    const startResetPassword = async() => {
        
    }

    useEffect(() => {

    }, []);

    return (
        <div className="w-full p-12 flex flex-col">
            <h1 className="font-semibold text-2xl text-center">Đặt lại mật khẩu</h1>
            <Text className='mb-3 text-center'>Tạo lại mật khẩu của bạn tại đây</Text>

            <label htmlFor="signin-password" className="shrink-0"><Text>Mật khẩu mới</Text></label>
            <Input.Password
                className=""
                placeholder="Aa"
                onBlur={(e) => setForm({...form, password: e.target.value})}
                id="signin-password" name="signin-password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />

            <label htmlFor="signin-password" className="shrink-0"><Text>Nhập lại mật khẩu</Text></label>
            <Input.Password
                className=""
                placeholder="Aa"
                onBlur={(e) => setForm({...form, confirmPassword: e.target.value})}
                id="signin-password" name="signin-password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />

            <Button
                className='mt-3 font-semibold!'
                type='primary'
                onClick={() => startResetPassword()}
            >
                Xác nhận mật khẩu
            </Button>

            <Button
                className='mt-1 font-semibold!'
                onClick={() => navigate("/auth/sign-in")}
            >
                Quay lại trang đăng nhập
            </Button>
        </div>
    );
};
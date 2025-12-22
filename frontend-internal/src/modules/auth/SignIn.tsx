import { useEffect, useState } from "react";
import { Button, Checkbox, Input, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/notificationUtils";

const { Text, Link } = Typography;

const DEFAULT_FORM = {
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
}

export default function SignIn() {
    const navigate = useNavigate();
    const [form, setForm] = useState(DEFAULT_FORM);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const startSignIn = async () => {
        notify('success', 'Dữ liệu đã được lưu thành công');
    }

    useEffect(() => {
        console.log(form);
        
    }, [form])

    return (
        <div className="p-12">
            <h1 className="mb-3 font-semibold text-2xl text-center">Đăng nhập</h1>

            <label htmlFor="signin-username" className="shrink-0"><Text>Email của bạn</Text></label>
            <Input
                className=""
                placeholder="Aa"
                onBlur={(e) => setForm({...form, usernameOrEmail: e.target.value})}
                id="signin-username" name="signin-username"
            />

            <label htmlFor="signin-password" className="shrink-0"><Text>Mật khẩu</Text></label>
            <Input.Password
                className=""
                placeholder="Aa"
                onBlur={(e) => setForm({...form, usernameOrEmail: e.target.value})}
                id="signin-password" name="signin-password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />

            <div className="my-1 flex justify-between items-center">
                <div>
                    <Checkbox
                        id="signin-rememberMe"
                        onChange={() => setForm({...form, rememberMe: !form.rememberMe})}
                    ></Checkbox>
                    <label htmlFor="signin-rememberMe" className="mb-1 ml-1 cursor-pointer">
                        <Text>Duy trì đăng nhập</Text>
                    </label>
                </div>

                <Link onClick={() => navigate("/auth/forgot-password")}>
                    Quên mật khẩu?
                </Link>
            </div>

            <Button
                className="w-full mt-1 font-semibold!"
                type="primary"
                onClick={() => startSignIn()}
            >
                Đăng nhập
            </Button>
        </div>
    );
};
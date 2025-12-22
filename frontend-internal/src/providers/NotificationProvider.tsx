// import { notification } from 'antd';
// import { useTranslation } from 'react-i18next';
// import { useEffect } from 'react';
// import { setNotificationApi, setTranslationFn } from '../utils/notificationUtils';

// export const GlobalNotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const { t } = useTranslation();
//     const [api, contextHolder] = notification.useNotification(); // Di chuyển vào đây!

//     useEffect(() => {
//         setNotificationApi(api);
//         setTranslationFn(t);
//     }, [api, t]);

//     return (
//         <>
//             {contextHolder}
//             {children}
//         </>
//     );
// };
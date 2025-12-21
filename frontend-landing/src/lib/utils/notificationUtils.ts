import type { NotificationInstance } from 'antd/es/notification/interface';
import type { TFunction } from 'i18next';

let notificationApi: NotificationInstance | null = null;
let t: TFunction | null = null;

export const setNotificationApi = (api: NotificationInstance) => {
    notificationApi = api;
};

export const setTranslationFn = (translateFn: TFunction) => {
    t = translateFn;
};

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const notify = (
    type: NotificationType,
    description: string | React.ReactNode,
    placement: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' = 'topRight'
) => {
    if (!notificationApi) {
        return;
    }

    const titleKey = `globalNotification.${type}`;
    const message = t ? t(titleKey) : type.charAt(0).toUpperCase() + type.slice(1);

    notificationApi[type]({
        message,
        description,
        placement,
        duration: type === 'error' ? 5 : 3,
        showProgress: true,
    });
};
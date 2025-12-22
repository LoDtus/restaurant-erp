import { Modal } from "antd";

interface GetConfirmModalParams {
    title?: string;
    content?: string;
    okText?: string;
    cancelText?: string;
}

export const getConfirmModal = ({
    title = "Xác nhận",
    content = "Bạn có chắc chắn muốn thực hiện?",
    okText = "Xác nhận",
    cancelText = "Hủy",
}: GetConfirmModalParams): Promise<boolean> => {
    return new Promise((resolve) => {
        Modal.confirm({
            title: title,
            content: content,
            okText: okText,
            cancelText: cancelText,
            onOk: () => resolve(true),
            onCancel: () => resolve(false),
            centered: true,
        });
    });
};
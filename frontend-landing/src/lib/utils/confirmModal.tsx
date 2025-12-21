"use client";
import { Button } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";

interface ConfirmModalProps {
    title: string;
    content: string;
    okText: string;
    cancelText: string;
    resolve: (value: boolean) => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    title,
    content,
    okText,
    cancelText,
    resolve,
}) => {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center">
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="z-10 bg-white p-5 rounded-md shadow-lg">
                <h2 className="text-center font-semibold text-xl">{title}</h2>
                <p>{content}</p>
                <div className="w-full mt-2 flex justify-end !font-semibold">
                    <button
                        className="py-1 px-3 rounded-sm ml-1 bg-gray text-white duration-200 active:scale-95"
                        onClick={() => resolve(false)}
                    >
                        {cancelText}
                    </button>
                    <Button
                        type="primary"
                        className="!font-semibold py-1 px-3 rounded-sm ml-1 text-white  duration-200 active:scale-95"
                        onClick={() => resolve(true)}
                    >
                        {okText}
                    </Button>
                </div>
            </div>
        </div>
    );
};

interface GetConfirmActionParams {
    title?: string;
    content?: string;
    okText?: string;
    cancelText?: string;
}

export const getConfirmAction = ({
    title = "Xác nhận",
    content = "Bạn có chắc chắn muốn thực hiện?",
    okText = "Xác nhận",
    cancelText = "Hủy",
}: GetConfirmActionParams): Promise<boolean> => {
    return new Promise((resolve) => {
        // Tạo một div tạm thời để render modal
        const modalContainer = document.createElement("div");
        document.body.appendChild(modalContainer);

        // Hàm xóa modal
        const removeModal = () => {
            modalContainer.remove();
        };

        // Render modal
        const root = createRoot(modalContainer);
        root.render(
            <ConfirmModal
                title={title}
                content={content}
                okText={okText}
                cancelText={cancelText}
                resolve={(value) => {
                    resolve(value);
                    removeModal();
                }}
            />
        );
    });
};
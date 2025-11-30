import { useEffect } from "react";
import { ModalProps } from "./meta/types";
import { X } from "lucide-react"
import { modalStyle } from "./meta/styles";

export const Modal = ({
    children,
    open = false,
    onClose,
    className,
    headerTitle }: ModalProps) => {

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className={modalStyle.container}
            onClick={onClose}
        >
            <div
                className={`${modalStyle.defaultStyle} ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={modalStyle.children}>
                    <p>{headerTitle}</p>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

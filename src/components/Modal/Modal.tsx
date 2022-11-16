import { FC, PropsWithChildren } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
    className?: string;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className }) => {
    return (
        <div className={`${styles.modal} ${className}`}>
            {children}
        </div>
    )
}

export default Modal
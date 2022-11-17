import { FC, MouseEvent, PropsWithChildren, useState } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    active?: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className, active: activeModal = false }) => {
    const [ active, setActive ] = useState(activeModal)

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.id === 'outside') {
            setActive(false)
        }
    }

    if (!active) {
        return null
    }
    
    return (
        <div
            id="outside"
            className={`
                ${styles.modal}
                ${className}
            `}
            onClick={handleClickOutside}
            
        >
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Modal;
import modalStore from "@/store/modalStore";
import { observer } from "mobx-react";
import { FC, MouseEvent, PropsWithChildren } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    active: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className, active }) => {

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.id === 'outside') {
            modalStore.changeState()
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

export default observer(Modal);
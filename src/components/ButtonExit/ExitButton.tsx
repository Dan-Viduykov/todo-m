import { ButtonHTMLAttributes, FC } from "react";
import styles from "./ExitButton.module.scss";

interface ExitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const ExitButton: FC<ExitButtonProps> = ({ className }) => {
    return (
        <button className={`${styles.button} ${className}`}>
            Выйти
        </button>
    )
}

export default ExitButton
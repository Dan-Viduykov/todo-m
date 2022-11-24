import { useRouter } from "next/router";
import { ButtonHTMLAttributes, FC } from "react";
import styles from "./ExitButton.module.scss";

interface ExitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const ExitButton: FC<ExitButtonProps> = ({ className }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/login')
    }

    return (
        <button className={`${styles.button} ${className}`} onClick={handleClick}>
            Выйти
        </button>
    )
}

export default ExitButton
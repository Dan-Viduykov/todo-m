import { FC, InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    error?: boolean;
    errorMessage?: string;
}

const TextField: FC<TextFieldProps> = ({className, error, errorMessage, ...props}) => {
    return (
        <div className={`${styles.wrap} ${className}`}>
            {errorMessage ? <span className={styles.errorMessage}>{errorMessage}</span> : null}
            <input
                className={`
                    ${styles.input}
                    ${error ? styles.input_error : null}
                `}
                {...props}
            />
        </div>
    )
}

export default TextField
import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './TextField.module.scss';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
    className?: string;
	error?: boolean;
	errorMessage?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ className, error, errorMessage, label, ...props }, ref) => {
		return (
			<label className={className}>
				{label && <span className={styles.label}>{label}</span>}
				<input
					ref={ref}
					className={`
						${styles.input}
						${error && styles.input_error}
					`}
					{...props}
				/>
				{errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
			</label>
		);
	}
);

TextField.displayName = 'TextField';
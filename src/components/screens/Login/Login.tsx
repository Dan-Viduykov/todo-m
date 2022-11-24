import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Login.module.scss";

const Login: FC = () => {
    const [ valueLogin, setValueLogin ] = useState('')
    const [ valuePassword, setValuePassword ] = useState('')
    
    const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueLogin(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValuePassword(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <section className={styles.wrap}>
            <h2 className={styles.title}>Вход в аккаунт</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    <p>Логин</p>
                    <input
                        className={styles.input}
                        placeholder="Ваш логин"
                        name="login"
                        type="text"
                        value={valueLogin}
                        onChange={handleLoginChange}
                    />
                </label>
                <label className={styles.label}>
                    <p>Пароль</p>
                    <input
                        className={styles.input}
                        placeholder="Ваш пароль"
                        name="paswword"
                        type="password"
                        value={valuePassword}
                        onChange={handlePasswordChange}
                    />
                </label>
            </form>
        </section>
    )
}

export default Login;
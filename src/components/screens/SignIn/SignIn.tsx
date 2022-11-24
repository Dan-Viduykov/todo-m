import TextField from "@/components/UI/TextField";
import Link from "next/link";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./SignIn.module.scss";

const SignIn: FC = () => {
    const [ valueLogin, setValueLogin ] = useState('')
    const [ valuePassword, setValuePassword ] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <section className={styles.wrap}>
            <h2 className={styles.title}>Вход в аккаунт</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    className={styles.input}
                    placeholder="Ваш логин"
                    type="text"
                />
                <TextField
                    className={styles.input}
                    placeholder="Ваш пароль"
                    type="password"
                />
            </form>
            <p className={styles.info}>
                Ещё не зарегестрированы? 
                <Link className={styles.link} href={'/signUp'}>Зарегестрируйтесь!</Link>
            </p>
        </section>
    )
}

export default SignIn;
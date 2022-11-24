import { FC } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import TextField from "@/components/UI/TextField";
import styles from "./SignIn.module.scss";
import userStore from "@/store/userStore";

const SignIn: FC = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    
    const loginUser = async (data: any) => {
        await axios.post('http://localhost:8080/login', data)
            .then(res => {
                const data = res.data;

                localStorage.setItem('user', JSON.stringify(data.user));
                userStore.setUser(data.user);
                router.push('/');
            })
    }

    return (
        <section className={styles.wrap}>
            <h2 className={styles.title}>Вход в аккаунт</h2>
            <form className={styles.form} onSubmit={handleSubmit(loginUser)}>
                <TextField
                    className={styles.input}
                    placeholder="Ваш email"
                    type="email"
                    {...register('email')}
                    />
                <TextField
                    className={styles.input}
                    placeholder="Ваш пароль"
                    type="password"
                    {...register('password')}
                />
                <button className={styles.buttonSumbit}>войти</button>
            </form>
            <p className={styles.info}>
                Ещё не зарегестрированы? 
                <Link className={styles.link} href={'/signUp'}>Зарегестрируйтесь!</Link>
            </p>
        </section>
    )
}

export default SignIn;
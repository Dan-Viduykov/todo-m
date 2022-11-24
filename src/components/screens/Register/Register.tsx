import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/UI/TextField";
import styles from "./Register.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import userStore from "@/store/userStore";

const Register: FC = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    
    const registerUser = async (data: any) => {
        await axios.post('http://localhost:8080/register', {...data, todos: []})
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                userStore.setUser(res.data.user)
                router.push('/')
            })
    }

    return (
        <section className={styles.wrap}>
            <h2 className={styles.title}>Создать аккаунт</h2>
            <form
                className={styles.form}
                onSubmit={handleSubmit(registerUser)}
            >
                    <TextField
                        className={styles.input}
                        placeholder="логин"
                        type="text"
                        {...register('login')}
                    />
                    <TextField
                        className={styles.input}
                        placeholder="пароль"
                        type="password"
                        {...register('password')}
                    />
                    <TextField
                        className={styles.input}
                        placeholder="пароль"
                        type="password"
                        {...register('password')}
                    />
                    <TextField
                        className={styles.input}
                        placeholder="Email"
                        type="email"
                        {...register('email')}
                    />
                <button className={styles.buttonSumbit}>Создать</button>
            </form>
        </section>
    )
}

export default Register
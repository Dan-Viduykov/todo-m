import { FC } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

import userStore, { IUser } from "@/store/userStore";
import TextField from "@/components/UI/TextField";
import styles from "./SignUp.module.scss";
import Link from "next/link";

export interface IRespone {
    accessToken: string;
    user: IUser;
}


const SignUp: FC = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    
    const registerUser = async (data: any) => {

        await axios.post('http://localhost:8080/register', {...data, todos: []})
            .then(res => {
                const data: IRespone = res.data;

                localStorage.setItem('user', JSON.stringify(data.user));
                userStore.setUser(data.user);
                router.push('/');
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
                        placeholder="Email"
                        type="email"
                        {...register('email')}
                    />
                    <TextField
                        className={styles.input}
                        placeholder="пароль"
                        type="password"
                        {...register('password')}
                    />
                <button className={styles.buttonSumbit}>Зарегестрироваться</button>
            </form>
            <p className={styles.info}>
                Уже зарегестрированы? 
                <Link className={styles.link} href={'/signIn'}>Войдите в свою учётную запись</Link>
            </p>
        </section>
    )
}

export default SignUp
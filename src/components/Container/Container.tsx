import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className={styles.container}>
            <div className={styles.wrap}>
                {children}
            </div>
        </main>
    )
}

export default Container
import { FC } from "react";
import styles from "./Filter.module.scss";

interface FilterProps {
    className?: string;
}

const Filter: FC<FilterProps> = ({ className }) => {
    return (
        <ul className={`${styles.filter} ${className}`}>
            <li className={styles.item}>all</li>
            <li className={styles.item}>done</li>
            <li className={styles.item}>undone</li>
        </ul>
    )
}

export default Filter
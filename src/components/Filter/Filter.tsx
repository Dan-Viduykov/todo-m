import { FC, MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import filterStore, { filterValues, TFilters } from "@/store/filterStore";
import styles from "./Filter.module.scss";

interface FilterProps {
    className?: string;
}

const Filter: FC<FilterProps> = ({ className }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        filterStore.setFilter(event.currentTarget.ariaLabel?.toString() as TFilters)
    }

    const elements = filterValues.map(({name, label}, index) => {
        return (
            <li 
                key={index}
                className={`
                    ${styles.item}
                    ${name === filterStore.filterType ? styles.item_active : null}
                `}
            >    
                <button
                    className={styles.button}
                    aria-label={name}
                    onClick={handleClick}>
                    {label}
                </button>
            </li>
        )
    })

    return (
        <ul className={`${styles.filter} ${className}`}>
            {elements}
        </ul>
    )
}

export default observer(Filter)
import { FC, MouseEvent, useState } from "react";
import styles from "./Filter.module.scss";

interface FilterProps {
    className?: string;
}

const filterValues = [
    { name: 'all', label: 'All' },
    { name: 'done', label: 'Done' },
    { name: 'undone', label: 'Undone' }
]

const Filter: FC<FilterProps> = ({ className }) => {
    const [ activeFilter, setActiveFilter ] = useState('all')

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setActiveFilter(event.currentTarget.ariaLabel as string)
    }

    const elements = filterValues.map(({name, label}, index) => {
        return (
            <li 
                key={index}
                className={`
                    ${styles.item}
                    ${name === activeFilter ? styles.item_active : null}
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

export default Filter
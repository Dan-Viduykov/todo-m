import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddTodoButton.module.scss";
import modalStore from "@/store/modalStore";
import { observer } from "mobx-react";

interface AddTodoButtonProps {
    className?: string;
}

const AddTodoButton: FC<AddTodoButtonProps> = ({ className }) => {
    const handleClick = () => {
        modalStore.changeState()
    }

    return (
        <button className={`${styles.button} ${className}`} onClick={handleClick}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

export default observer(AddTodoButton)
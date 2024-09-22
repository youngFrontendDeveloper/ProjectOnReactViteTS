import styles from "./AddedControl.module.scss"
import {useState} from "react";

interface AddedControlProps {
    defaultCount: number,
    extensionClass?: string,
}

export default function AddedControl({defaultCount, extensionClass}: AddedControlProps) {
    const [count, setCount] = useState<number>(defaultCount);
    const countName = count > 1 ? "items" : "item";

    const handleClickPlus = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleClickMinus = () => {
        if (count === 0) {
            setCount(0)
        } else {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className={`${styles["added-control"]} ${extensionClass}`}>
            <button
                type="button"
                onClick={handleClickMinus}
                className={`${styles["added-control__btn"]} ${styles["added-control__btn--minus"]}`}
                aria-label="Minus"
            >
                <img
                    src="/images/minus-icon.svg"
                    aria-hidden="true"
                    width={18}
                    height={3}
                    loading="lazy"
                />
            </button>
            <p className={styles["added-control__count"]}>{count} {countName} </p>
            <button
                type="button"
                onClick={handleClickPlus}
                className={styles["added-control__btn"]}
                aria-label="Plus"
            >
                <img
                    src="/images/plus-icon.svg"
                    aria-hidden="true"
                    width={18}
                    height={18}
                    loading="lazy"
                />
            </button>
        </div>
    )
}
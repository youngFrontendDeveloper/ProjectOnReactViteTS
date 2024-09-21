import styles from "./Title.module.scss";

interface TitleProps {
    title: string | undefined;
    extensionClass?: string;
}

export default function Title({title, extensionClass}: TitleProps) {
    return (
        <h2 className={`${styles["title"]} ${extensionClass}`}>{title}</h2>
    )
}
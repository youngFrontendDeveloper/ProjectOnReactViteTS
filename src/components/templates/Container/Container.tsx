import styles from "./Container.module.scss";
import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    extensionClass?: string
}

export default function Container({children, extensionClass}: ContainerProps) {
    return (
        <div className={`${styles["container"]} ${extensionClass}`}>
            {children}
        </div>
    );
};


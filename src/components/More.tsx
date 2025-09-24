"use client";
import styles from "./More.module.css";

type Props = {
    title: string;
    text: string;
};

export default function More({ title, text }: Props) {
    return (
        <div className={styles.more}>
            <p className={styles.TitleBox}>
                <span className={styles.Title}>{title}</span>
            </p>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

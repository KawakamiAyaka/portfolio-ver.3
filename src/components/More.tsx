"use client";
import styles from "./More.module.css";

type Props = {
    title: string;
    subtitle?: string;
    text: string;
};

export default function More({ title, subtitle, text }: Props) {
    return (
        <div className={styles.more}>
            <p className={styles.TitleBox}>
                <span className={styles.Title}>{title}</span>
            </p>

            {subtitle && <h3 className={styles.Subtitle}>{subtitle}</h3>}

            <p className={styles.text}>{text}</p>
        </div>
    );
}

"use client";
import styles from "./Learned.module.css";

type Props = {
    head: string;
    text: string;
};

export default function Learned({ head, text }: Props) {
    return (
        <div className={styles.Container}>
            <p className={styles.Title}>学んだこと</p>
            <div className={styles.box}>
                <h3 className={styles.Head}>{head}</h3>
                <p className={styles.Text}>{text}</p>
            </div>
        </div>
    );
}

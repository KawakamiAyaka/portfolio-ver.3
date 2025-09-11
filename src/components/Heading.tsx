"use client";
import styles from "./Heading.module.css";

type Props = {
    text: string; // 見出しに表示するテキスト
};

export default function Heading({ text }: Props) {
    return (
        <h1>
            <span className={styles.marker}>{text}</span>
        </h1>
    );
}

"use client";
import Link from "next/link";
import styles from "./Lead.module.css";

type Props = {
    nextLink: string; // 次の作品へのリンク
};

export default function Lead({ nextLink }: Props) {
    return (
        <div className={styles.LeadContainer}>
            <Link href="/works" className={styles.BackButton}>
                ← 一覧に戻る
            </Link>

            <Link href={nextLink} className={styles.NextButton}>
                次の作品へ →
            </Link>
        </div>
    );
}

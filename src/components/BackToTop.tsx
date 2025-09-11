"use client";

import styles from "./BackToTop.module.css";
import Image from "next/image";

export default function BackToTop() {
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            aria-label="ページ上部へ戻る"
            className={styles.backToTop}
            onClick={onClick}
        >
            <Image
                className={styles.TopArro}
                src="/TopArrow.svg" // public/vercel.svg に置いた画像
                alt="TopArrow" // 代替テキスト（必須！）
                width={14}
                height={14}
            />
            <p className={styles.TopBtnText}>page top</p>
        </button>
    );
}

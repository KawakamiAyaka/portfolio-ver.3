"use client";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Profile() {
    const [copied, setCopied] = useState(false);
    const email = "kawa.aya1109@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // 2秒後に戻す
        } catch (err) {
            console.error("コピーに失敗しました", err);
        }
    };

    return (
        <main>
            <Header />
            <div className={styles.NoteBox}>
                <div className={styles.NotePage}>
                    <Image
                        className={styles.CONTACT}
                        src="/CONTACT.svg"
                        alt="CONTACT"
                        width={556}
                        height={88}
                    />
                    <p className={styles.text}>下記のメールアドレスにお気軽にご連絡ください</p>
                    <Image
                        className={styles.MEMO}
                        src="/MEMO.svg"
                        alt="メモ"
                        width={500}
                        height={250}
                    />
                    <div className={styles.MailBox}>
                        <div className={styles.Box}>
                            <p className={styles.email}>{email}</p>
                            <button
                                onClick={handleCopy}
                                className={styles.CopyMark}
                                aria-label="メールアドレスをコピー"
                            />
                            {/* 横に並べない。Boxの“下”に浮かせて出す */}
                            <span
                                className={`${styles.copiedToast} ${copied ? styles.show : ""}`}
                                role="status"
                                aria-live="polite"
                            >
                                コピーしました！
                            </span>
                        </div>
                    </div>
                    <div className={styles.dashed}></div>
                    <p className={styles.copy}>&copy; 2025 Kawakami Ayaka</p>
                </div>
            </div>
        </main>
    );
}

"use client";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

export default function Profile() {
    const email = "kawa.aya1109@gmail.com";

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
                            {/* ここを mailto に */}
                            <a
                                href={`mailto:${email}`}
                                className={styles.email}
                                aria-label="メール作成画面を開く"
                            >
                                {email}
                            </a>
                        </div>
                    </div>

                    <div className={styles.dashed}></div>
                    <p className={styles.copy}>&copy; 2025 Kawakami Ayaka</p>
                </div>
            </div>
        </main>
    );
}

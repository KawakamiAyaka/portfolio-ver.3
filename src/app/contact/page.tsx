"use client";

import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
    const email = "kawa.aya1109@gmail.com";

    const handleCopyAndMail = async () => {
        const text = email;

        // フォールバック（古いブラウザ/フォーカス問題用）
        const fallbackCopy = (value: string) => {
            const ta = document.createElement("textarea");
            ta.value = value;
            ta.style.position = "fixed";
            ta.style.top = "0";
            ta.style.left = "0";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            try {
                document.execCommand("copy");
            } catch (e) {
                console.error("フォールバックコピーに失敗:", e);
            }
            document.body.removeChild(ta);
        };

        try {
            if (navigator.clipboard && document.hasFocus()) {
                await navigator.clipboard.writeText(text);
            } else {
                fallbackCopy(text);
            }
        } catch (err) {
            console.error("clipboard.writeText に失敗:", err);
            fallbackCopy(text);
        }

        // 少し遅らせて mailto を起動（Safari等のフォーカス問題回避）
        setTimeout(() => {
            window.location.href = `mailto:${text}`;
        }, 80);
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
                            {/* 文字はクリックなし */}
                            <p className={styles.email}>{email}</p>

                            {/* コピーボタンだけアクション */}
                            <button
                                type="button"
                                onClick={handleCopyAndMail}
                                className={styles.CopyMark}
                                aria-label="メールアドレスをコピーしてメール作成画面を開く"
                            >
                                <Image src="/copy.svg" alt="コピー" width={20} height={20} />
                                {/* 「コピー」の吹き出しはCSSの::afterで出す仕様にしているならテキストは不要 */}
                            </button>
                        </div>
                    </div>

                    <div className={styles.dashed}></div>
                    <p className={styles.copy}>&copy; 2025 Kawakami Ayaka</p>
                </div>
            </div>
        </main>
    );
}

"use client";
import Image from "next/image";
import styles from "./Works.module.css";

type Props = {
    type: string;
    title: string;
    tags: string[];
    position: string;
    tools: string;
    designLink?: string; // デザインファイル（任意）
    websiteLink?: string; // Webサイト（任意）← 追加
    image: string;
    imageAlt: string;
    note?: string;
};

export default function Works({
    type,
    title,
    tags,
    position,
    tools,
    designLink,
    websiteLink, // ← 追加
    image,
    imageAlt,
    note,
}: Props) {
    return (
        <div className={styles.FirstBox}>
            {/* 左側：情報 */}
            <div className={styles.WorkInformation}>
                <p className={styles.type}>{type}</p>
                <div className={styles.TitleBox}>
                    <h2>{title}</h2>
                </div>

                <div>
                    {tags.map((tag, idx) => (
                        <span key={idx} className={styles.Tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <p className={styles.position}>{position}</p>
                <p className={styles.tools}>{tools}</p>

                {(designLink || websiteLink) && (
                    <div className={styles.LinkButtons}>
                        {designLink && (
                            <a
                                className={styles.LinkButton}
                                href={designLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="デザインファイルを見る（新規タブ）"
                            >
                                デザインファイルを見る
                            </a>
                        )}
                        {websiteLink && (
                            <a
                                className={styles.LinkButton}
                                href={websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Webサイトを見る（新規タブ）"
                            >
                                Webサイトを見る
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* 右側：サムネイル */}
            <div>
                <Image
                    className={styles.WkwkThumbnail}
                    src={image.startsWith("/") ? image : `/${image}`}
                    alt={imageAlt}
                    width={650}
                    height={406}
                />
                {note && <p className={styles.Note}>※{note}</p>}
            </div>
        </div>
    );
}

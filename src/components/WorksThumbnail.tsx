"use client";
import Image from "next/image";
import styles from "./WorksThumbnail.module.css";
import Link from "next/link";

type Props = {
    image: string;
    type: string;
    title: string;
};

export default function WorksThumbnail({ image, type, title }: Props) {
    return (
        <div className={styles.WorksBox}>
            <Link href="/Rihlar">
                <Image
                    className={styles.WorksThumbnail}
                    src={image.startsWith("/") ? image : `/${image}`}
                    alt={`${title}のサムネイル`}
                    width={400}
                    height={300}
                />
            </Link>

            <p className={styles.Type}>{type}</p>
            <p className={styles.Title}>{title}</p>
        </div>
    );
}

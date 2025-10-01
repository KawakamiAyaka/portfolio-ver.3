"use client";
import styles from "./Logo.module.css";
import Image from "next/image";

type Props = {
    text: string;
    image: string;
    imageAlt: string;
};

export default function Logo({ text, image, imageAlt }: Props) {
    return (
        <div className={styles.LogoMore}>
            <Image
                className={styles.Logo}
                src={image.startsWith("/") ? image : `/${image}`}
                alt={imageAlt}
                width={300}
                height={200}
            />
            <p className={styles.text}>{text}</p>
        </div>
    );
}

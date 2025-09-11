"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Header() {
    return (
        <footer className={styles.footer}>
            <p className={styles.StickyNoteText}>Thank you for watching!</p>
            <div className={styles.dashed}></div>
            <p>&copy; 2025 Kawakami Ayaka</p>
        </footer>
    );
}

"use client";
import styles from "./SkillBar.module.css";

type Props = {
    label: string;
    percent: number; // 0 ~ 100
    color?: string; // 斜線の色
    borderColor?: string; // 枠線の色
    fillColor?: string; // 塗りのベース色
};

export default function SkillBar({
    label,
    percent,
    color = "#94CB9B",
    borderColor = "#94CB9B",
    fillColor = "#DFF2E1", // デフォルトで少し薄めの色
}: Props) {
    return (
        <div className={styles.skill}>
            <span className={styles.label}>{label}</span>
            <div className={styles.bar} style={{ borderColor: borderColor }}>
                <div
                    className={styles.progress}
                    style={{
                        width: `${percent}%`,
                        backgroundColor: fillColor, // ← 塗り
                        backgroundImage: `repeating-linear-gradient(
                45deg,
                ${color},
                ${color} 4px,
                transparent 4px,
                transparent 8px
            )`,
                    }}
                />
            </div>
        </div>
    );
}

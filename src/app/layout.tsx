import type { Metadata } from "next";
import { Kiwi_Maru, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const kiwi = Kiwi_Maru({ weight: ["400"], subsets: ["latin"], display: "swap" });
export const Saint = Mrs_Saint_Delafield({ weight: ["400"], subsets: ["latin"], display: "swap" });

const SITE_URL = "https://kawakami-ayaka-portfolio.vercel.app"; // ←本番URLに

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL), // 相対→絶対に
    title: "Kawakami Ayaka's Portfolio",
    description: "川上采華のポートフォリオサイトです。",
    openGraph: {
        title: "Kawakami Ayaka's Portfolio",
        description: "作品紹介・プロフィールなど",
        url: SITE_URL,
        siteName: "Kawakami Ayaka's Portfolio",
        images: [
            {
                url: "/ogp.png", // public/ogp.png（1200×630 推奨）
                width: 1200,
                height: 630,
                alt: "Kawakami Ayaka's Portfolio サムネイル",
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={kiwi.className}>{children}</body>
        </html>
    );
}

import type { Metadata } from "next";
import { Kiwi_Maru, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const kiwi = Kiwi_Maru({ weight: ["400"], subsets: ["latin"], display: "swap" });
export const Saint = Mrs_Saint_Delafield({ weight: ["400"], subsets: ["latin"], display: "swap" });

// あなたの本番URL
const SITE_URL = "https://kawakami-ayaka-portfolio.vercel.app";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Kawakami Ayaka's Portfolio",
    description: "川上采華のポートフォリオサイト",
    openGraph: {
        title: "Kawakami Ayaka's Portfolio",
        url: SITE_URL,
        siteName: "Kawakami Ayaka's Portfolio",
        images: [
            {
                url: `${SITE_URL}/ogp.png`, // ← 絶対URLに
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

import { Noto_Sans_JP, Kiwi_Maru, Playwrite_IN } from "next/font/google";
import "./globals.css";

const kiwi = Kiwi_Maru({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={kiwi.className}>{children}</body>
        </html>
    );
}

import { Kiwi_Maru, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const kiwi = Kiwi_Maru({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

export const Saint = Mrs_Saint_Delafield({
    weight: ["400"],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={kiwi.className}>{children}</body>
        </html>
    );
}

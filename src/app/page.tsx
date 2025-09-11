import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import "./page.css";
import { Saint } from "@/app/layout";

export default function Home() {
    return (
        <main>
            <Header />
            <div className="NoteBox">
                <div className="Binding"></div>
                <div className="Cover">
                    <p className={`${Saint.className} SubTitle`}>Kawakami Ayaka's</p>
                    <div className="TitleBox">
                        <h1 className="Title">PORTFOLIO</h1>
                    </div>

                    <div className="BtnBox">
                        {/* ← 親を Link にして全体クリック可能に */}
                        <Link href="/profile" className="Btn" aria-label="プロフィールへ進む">
                            <span className="NextBtn">Next</span>
                            <Image
                                className="RightArrow"
                                src="/RightArrow.svg" // public/RightArrow.svg に置く
                                alt="" // 装飾アイコンなので空alt
                                width={16}
                                height={16}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

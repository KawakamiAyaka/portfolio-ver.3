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
                    <p className={`${Saint.className} SubTitle`}>Kawakami Ayaka's</p>{" "}
                    <div className="TitleBox">
                        <h1 className="Title">PORTFOLIO</h1>
                    </div>
                    <div className="BtnBox">
                        <div className="Btn">
                            <Link className="NextBtn" href="/profile">
                                Next
                            </Link>
                            <Image
                                className="RightArrow"
                                src="/RightArrow.svg" // public/vercel.svg に置いた画像
                                alt="RightArrow" // 代替テキスト（必須！）
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

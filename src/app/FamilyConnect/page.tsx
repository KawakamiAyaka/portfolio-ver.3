import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Logo from "@/components/Logo";
import styles from "./page.module.css";
import Image from "next/image";

export default function WorksTemplate() {
    return (
        <main>
            <Header />
            <div className={styles.NoteBox}>
                <div className={styles.NotePage}>
                    <BackToTop />
                    {/* // デザインのみ */}
                    {/* <Works
                        type="アプリケーション"
                        title="わくわく探検隊"
                        tags={["チーム制作"]}
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/..."
                        image="/SampleImage.svg"
                        imageAlt="わくわく探検隊のサムネイル"
                        note="この作品は現在非公開のためデザインファイルのみ"
                    /> */}
                    {/* // デザイン + Webサイト */}
                    <Works
                        type="Webサイト"
                        title="FamilyConnect"
                        tags={["個人制作"]}
                        position="担当：企画 / デザイン / コーディング"
                        tools="ツール：Figma / Illustrator / VSCode"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/Fam.png"
                        imageAlt="わくわく探検隊のサムネイル"
                    />
                    <div className={styles.More}>
                        <More
                            title="概要"
                            text="家族間の情報共有をスムーズにし、絆を深めるためのコミュニケーション支援アプリ。"
                        />
                        <More
                            title="ターゲット/ゴール"
                            text="忙しさや生活スタイルの違いで会話が減った家族が、簡単に連絡や予定を共有できる環境をつくる。"
                        />
                        <More
                            title="制作背景"
                            text="現代の家庭で増える「会話の減少」「すれ違い」を解消し、家族のつながりを取り戻したいという思いから企画。"
                        />
                        <More
                            title="制作期間"
                            text="約6か月（企画設計・開発を含む）そのうちデザイン設計期間：約1か月半"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/FamScreen.svg"
                        alt="FamilyConnectスクリーンショット集" // 代替テキスト（必須！）
                        width={1000}
                        height={500}
                    />
                    <div className={styles.Color}>
                        <Heading text="COLOR" />
                        <div>
                            <div className={styles.ColorPalletBox}>
                                <div>
                                    <div className={styles.MainColor}></div>
                                    <p className={styles.ColorCode}>#ABDAD1</p>
                                </div>
                                <div>
                                    <div className={styles.AccentColor}></div>
                                    <p className={styles.ColorCode}>#F4A460</p>
                                </div>
                                <div>
                                    <div className={styles.BaseColor}></div>
                                    <p className={styles.ColorCode}>#FAEEC6</p>
                                </div>
                            </div>
                            <div className={styles.ColorText}>
                                <p className={styles.text}>
                                    家族の絆をテーマに、男女問わず親しみやすい印象を与えるために、暖色と寒色を組み合わせました。
                                    <span className={styles.Main}>寒色で信頼感・落ち着き</span>を、
                                    暖色で<span className={styles.Accent}>あたたかさ・安心感</span>
                                    を表現し、家族の多様な関係性や日常に寄り添う配色を意識しています。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Heading text="FEATURES" />
                        <div></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

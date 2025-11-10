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
                        title="Learnest"
                        tags={["個人制作"]}
                        position="担当：企画 / デザイン / コーディング"
                        tools="ツール：Figma / Illustrator / VSCode"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/learnest.png"
                        imageAlt="Learnestのサムネイル"
                    />
                    <div className={styles.More}>
                        <More
                            title="概要"
                            text="デザインを学びたい人同士が作品投稿とフィードバックを通じて成長できる学習支援プラットフォーム。"
                        />
                        <More
                            title="ターゲット/ゴール"
                            text="デザインを勉強中の学生や初心者が、互いに刺激し合いながらスキルを効率的に向上させることを目指す。"
                        />
                        <More
                            title="制作背景"
                            text="デザインの学習方法や評価の機会が少ないという課題に対し、学びと発信を両立できる環境を提供したいという思いから企画。"
                        />
                        <More
                            title="制作期間"
                            text="約6か月（企画設計・開発を含む）そのうちデザイン設計期間：約1か月半"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/LearnestScreen.svg"
                        alt="Learnestスクリーンショット集" // 代替テキスト（必須！）
                        width={1000}
                        height={500}
                    />
                    <div className={styles.Color}>
                        <Heading text="COLOR" />
                        <div>
                            <div className={styles.ColorPalletBox}>
                                <div>
                                    <div className={styles.MainColor}></div>
                                    <p className={styles.ColorCode}>#6084E7</p>
                                </div>
                                <div>
                                    <div className={styles.AccentColor}></div>
                                    <p className={styles.ColorCode}>#6FFF65</p>
                                </div>
                                <div>
                                    <div className={styles.BaseColor}></div>
                                    <p className={styles.ColorCode}>#FFFFFF</p>
                                </div>
                            </div>
                            <div className={styles.ColorText}>
                                <p className={styles.text}>
                                    <span className={styles.Main}>学習の青</span>と
                                    <span className={styles.Accent}>成長の緑</span>
                                    を組み合わせ、白を基調にすることでどんなデザインにも馴染む配色にしました。白に映えるよう発色にもこだわっています。
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

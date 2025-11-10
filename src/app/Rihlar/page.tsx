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
                        type="アプリケーション"
                        title="Rihlar（リフラル）"
                        tags={["チーム制作"]}
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/Rihlar.png"
                        imageAlt="わくわく探検隊のサムネイル"
                        note="この作品は現在公開されていません"
                    />
                    <div className={styles.More}>
                        <More
                            title="概要"
                            text="街を歩くことで自分の陣地を広げ、移動そのものを楽しめる陣取り型ライフログアプリ。"
                        />
                        <More
                            title="ターゲット/ゴール"
                            text="健康のために歩数を増やしたい人を中心に、歩くことを習慣化し自然に1日1万歩を目指せる体験を提供。"
                        />
                        <More
                            title="制作背景"
                            text="一日一万歩を目指し、日々の歩数を少しずつでも伸ばしたくなるきっかけを作りたいという思いから企画。"
                        />
                        <More
                            title="制作期間"
                            text="約6か月（企画設計・開発を含む）そのうちデザイン設計期間：約1か月半"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/RihlarScreen.png"
                        alt="わくわく探検隊スクリーンショット集" // 代替テキスト（必須！）
                        width={1000}
                        height={500}
                    />
                    <div className={styles.Color}>
                        <Heading text="COLOR" />
                        <div>
                            <div className={styles.ColorPalletBox}>
                                <div>
                                    <div className={styles.MainColor}></div>
                                    <p className={styles.ColorCode}>#98BA87</p>
                                </div>
                                <div>
                                    <div className={styles.AccentColor}></div>
                                    <p className={styles.ColorCode}>#A8EAF0</p>
                                </div>
                                <div>
                                    <div className={styles.BaseColor}></div>
                                    <p className={styles.ColorCode}>#EBEDE1</p>
                                </div>
                            </div>
                            <div className={styles.ColorText}>
                                <p className={styles.text}>
                                    歩くことを楽しく促す体験に合わせて、
                                    <span className={styles.Main}>自然を感じる</span>
                                    <span className={styles.Accent}>アースカラー</span>
                                    を採用しました。Googleマップのトーンと調和するよう彩度を調整し、画面全体に
                                    <span className={styles.Base}>落ち着きと統一感</span>
                                    を持たせています。
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

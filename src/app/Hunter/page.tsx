import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Logo from "@/components/Logo";
import styles from "./page.module.css";
import Image from "next/image";
import { features } from "process";

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
                        title="ものしりハンター"
                        tags={["チーム制作"]}
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/Hunter.png"
                        imageAlt="ものしりハンターのサムネイル"
                        note="この作品は現在公開されていません"
                    />
                    <div className={styles.More}>
                        <More
                            title="概要"
                            text="カメラで身の回りの物を撮影し、名前を知って集めることで、子どもが楽しく学べる知育サイト。"
                        />
                        <More
                            title="ターゲット/ゴール"
                            text="好奇心旺盛な年長～小1の子どもを中心に、発見と収集を通じて学ぶことの楽しさを実感してもらう。"
                        />
                        <More
                            title="制作背景"
                            text="好奇心いっぱいの子どもたちが、「知らないものを見つけて学ぶ楽しさ」を感じられる遊びとして考案。"
                        />
                        <More
                            title="制作期間"
                            text="約6か月（企画設計・開発を含む）そのうちデザイン設計期間：約1か月"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/HunterScreen.svg"
                        alt="ものしりハンタースクリーンショット集" // 代替テキスト（必須！）
                        width={1000}
                        height={500}
                    />

                    <div className={styles.Color}>
                        <Heading text="COLOR" />
                        <div>
                            <div className={styles.ColorPalletBox}>
                                <div>
                                    <div className={styles.MainColor}></div>
                                    <p className={styles.ColorCode}>#FF7530</p>
                                </div>
                                <div>
                                    <div className={styles.AccentColor}></div>
                                    <p className={styles.ColorCode}>#FFE681</p>
                                </div>
                                <div>
                                    <div className={styles.BaseColor}></div>
                                    <p className={styles.ColorCode}>#FFFAE6</p>
                                </div>
                            </div>
                            <div className={styles.ColorText}>
                                <p className={styles.text}>
                                    黄色を中心に、見る人が
                                    <span className={styles.Main}>元気や温かさ</span>
                                    を感じられるような配色を意識しました。明度と彩度のコントラストで、画面全体に
                                    <span className={styles.Accent}>活気 とまとまり</span>
                                    を生み出しています。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Heading text="FEATURES" />
                        <div className={styles.Features}>
                            <div className={styles.FeaturesBox}>
                                <div>
                                    <Image
                                        className={styles.WkwkScreen}
                                        src="/HunterScreen.svg"
                                        alt="ものしりハンタースクリーンショット集" // 代替テキスト（必須！）
                                        width={1000}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

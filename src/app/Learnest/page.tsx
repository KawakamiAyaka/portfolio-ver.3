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
                        src="/WkwkScreen.svg"
                        alt="わくわく探検隊スクリーンショット集" // 代替テキスト（必須！）
                        width={1500}
                        height={660}
                    />
                    <div className={styles.Wrap}>
                        <div className={styles.Logo}>
                            <Heading text="LOGO" />
                            <Logo
                                text="ここにロゴに込めた思い"
                                image="/LogoSample.svg"
                                imageAlt="わくわく探検隊のロゴ"
                            />
                        </div>
                        <div className={styles.Color}>
                            <Heading text="COLOR" />
                            <div>
                                <div className={styles.ColorPalletBox}>
                                    <div>
                                        <div className={styles.MainColor}></div>
                                        <p className={styles.ColorCode}>#FFE162</p>
                                    </div>
                                    <div>
                                        <div className={styles.AccentColor}></div>
                                        <p className={styles.ColorCode}>#D65550</p>
                                    </div>
                                    <div>
                                        <div className={styles.BaseColor}></div>
                                        <p className={styles.ColorCode}>#EEEEEE</p>
                                    </div>
                                </div>
                                <div className={styles.ColorText}>
                                    <p className={styles.text}>
                                        全体的にはっきりした彩度の高い色にすることで、画面にメリハリをつけわかりやすく見えるようにしました。
                                        黄色は「楽しさ」、赤は「競争心」をイメージして選びました。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Heading text="Features" />
                        <div></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

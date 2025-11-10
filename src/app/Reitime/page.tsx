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
                        title="レイタイム"
                        tags={["チーム制作"]}
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/Reitime.png"
                        imageAlt="レイタイムのサムネイル"
                    />
                    <div className={styles.More}>
                        <More
                            title="概要"
                            text="電車遅延時にリアルタイムで振替案や到着予測を提示し、ユーザーの時間を最適化する交通支援アプリ。"
                        />
                        <More
                            title="ターゲット/ゴール"
                            text="通勤・通学などで電車を日常的に利用する人が、遅延に迅速に対応しスケジュールの狂いを最小限に抑えることを目指す。"
                        />
                        <More
                            title="制作背景"
                            text="電車遅延による計画の乱れや情報不足に着目し、正確な情報提供でストレスを軽減したいという課題意識から発案。"
                        />
                        <More
                            title="制作期間"
                            text="約6か月（企画設計・開発を含む）そのうちデザイン設計期間：約2か月"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/RaitimeScreen.svg"
                        alt="レイタイムスクリーンショット集" // 代替テキスト（必須！）
                        width={1000}
                        height={500}
                    />
                    <div className={styles.Wrap}>
                        <div className={styles.Color}>
                            <Heading text="COLOR" />
                            <div>
                                <div className={styles.ColorPalletBox}>
                                    <div>
                                        <div className={styles.MainColor}></div>
                                        <p className={styles.ColorCode}>#46A667</p>
                                    </div>
                                    <div>
                                        <div className={styles.AccentColor}></div>
                                        <p className={styles.ColorCode}>#F6AF39</p>
                                    </div>
                                    <div>
                                        <div className={styles.BaseColor}></div>
                                        <p className={styles.ColorCode}>#EDEDED</p>
                                    </div>
                                </div>
                                <div className={styles.ColorText}>
                                    <p className={styles.text}>
                                        <span className={styles.Main}>
                                            緑や灰色を機械的な印象を与える色
                                        </span>
                                        として採用し、電車のシステム的な正確さや無機質さを表現しました。
                                        <span className={styles.Accent}>
                                            落ち着いた深みのあるトーン
                                        </span>
                                        で、朝の空気に馴染む静かな雰囲気を演出しています。
                                    </p>
                                </div>
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

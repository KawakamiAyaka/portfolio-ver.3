import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Link from "next/link";
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
                        title="わくわく探検隊"
                        tags={["チーム制作"]}
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/Wkwk.png"
                        imageAlt="わくわく探検隊のサムネイル"
                        note="この作品は現在公開されていません"
                    />
                    <div className={styles.More}>
                        <More
                            title="概要"
                            text="目的地までの道のりが退屈だと感じる子どもたちに、「探索」「競争」「収集」の楽しさを提供するアプリ。"
                        />
                        <More
                            title="ターゲット/ゴール"
                            text="スマホを持って一人で出かけられる年頃の子どもが、ゲーム感覚で目的地まで楽しく行動し、遅刻せずに移動できることを目指す。"
                        />
                        <More
                            title="制作背景"
                            text="自由テーマのもと、「子どもが日常の移動をもっと楽しめる体験を作りたい」という思いから企画。"
                        />
                        <More
                            title="制作期間"
                            text="約6か月（企画設計・開発を含む）そのうちデザイン設計期間：約1か月"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/WkwkScreen.svg"
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
                    <div>
                        <Heading text="FEATURES" />
                        <div className={styles.Features}>
                            <div className={styles.FeaturesBox}>
                                <Image
                                    className={styles.HunterMock1}
                                    src="/WkwkMock1.svg"
                                    alt="ものしりハンター機能説明用モックアップ"
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>
                                        お気に入りキャラでテンションアップ
                                    </h2>
                                    <p className={styles.Text}>
                                        好きなキャラをトップページに設定できます。
                                        <br />
                                        友達と見せ合うことで、会話やコミュニケーションのきっかけになります。
                                        <br />
                                        子どもに人気のミニキャラを採用し、かわいさとかっこよさを両立させました。
                                    </p>
                                </div>
                            </div>

                            <div className={styles.FeaturesBox}>
                                <div className={styles.TextBox}>
                                    <h2 className={styles.HeadRight}>コインを集めて競争</h2>
                                    <p className={styles.TextRight}>
                                        友達と共通の目的地を決め、コインの数と速さで勝負。
                                        <br />
                                        歩く道のりも遊びに変わる、シンプルで楽しいルール。
                                    </p>
                                </div>
                                <Image
                                    className={styles.HunterMock}
                                    src="/WkwkMock2.svg"
                                    alt="ものしりハンター機能説明用モックアップ"
                                    width={400}
                                    height={400}
                                />
                            </div>

                            <div className={styles.FeaturesBox}>
                                <Image
                                    className={styles.HunterMock}
                                    src="/WkwkMock3.svg"
                                    alt="ものしりハンター機能説明用モックアップ"
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>ガチャでキャラを集める</h2>
                                    <p className={styles.Text}>
                                        集めたコインでガチャを回し、好きなキャラやレアキャラをゲット。
                                        <br />
                                        集める楽しさた体験に。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/Hunter" className={styles.MoreWork}>
                        Webサイトを見る
                    </Link>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

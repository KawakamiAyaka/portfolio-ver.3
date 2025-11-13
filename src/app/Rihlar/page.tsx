import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Lead from "@/components/Lead";
import Learned from "@/components/Learned";
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
                        title="Rihlar（リフラル）"
                        tags={["チーム制作", "2年前期"]}
                        summary="街を歩くことで自分の陣地を広げ、移動そのものを楽しめる陣取り型ライフログアプリ"
                        period="制作期間：2024年4月〜8月(デザイン設計期間：約2ヶ月半)"
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/design/BFipcBkJSMMyenTxPb4Zkb/Rihlar?node-id=0-1&t=KyslNXli9ts3hwuv-1"
                        image="/Rihlar.png"
                        imageAlt="Rihlarのサムネイル"
                        note="この作品は現在公開されていません"
                    />
                    <div className={styles.More}>
                        <More
                            title="課題"
                            subtitle="歩くことが「ただの移動」になっている"
                            text="ランニングアプリや記録アプリは多いものの、普段の「歩くこと」自体に楽しさや達成感を感じられる仕組みは少ないのが現状です。 移動は単なる手段となり、運動不足や歩数の減少につながっています。 毎日の移動そのものに「価値」と「目的」を与えることが課題です。"
                        />
                        <More
                            title="ターゲット"
                            subtitle="歩くことを「遊び」に変えたい人たち"
                            text={`・主ターゲット：歩くことを「義務」ではなく「遊び」に変えたい若者層（学生・社会人） 
                                通勤・通学などの移動をゲームとして楽しみたい人です。 
                                ・副ターゲット：ヘルスケア層、運動不足層 
                                健康維持を目的に歩く人や、1日1万歩を意識している人、手軽に身体を動かすきっかけを求めている人です。`}
                        />
                        <More
                            title="ゴール"
                            subtitle="移動を「達成感のある体験」に変える"
                            text="移動や歩行を「自分の陣地を広げる」という体験に変えることで、毎日の行動がゲームの一部になります。 チームや仲間とのつながりを通じて自然に歩数を増やし、歩くことを健康維持だけでなく、自己表現やコミュニケーションの手段にすることを目指しています。"
                        />
                        <More
                            title="デザイン"
                            subtitle="日常の移動を「ゲーム」に変えるデザイン"
                            text="「日常の移動をゲームに変える」ことをテーマに、現実世界とゲームの世界がリアルタイムで自然につながるデザインを目指しました。 リアルなマップUIで自分の行動が地図に残る体験を強調し、実績機能で達成感を可視化しています。 チーム対戦や通知機能によって、競い合いながら継続できるモチベーションを設計しました。 「歩く＝退屈」から「歩く＝楽しい」へ。デザインの力で、日常の行動をポジティブに変えることを狙いました。"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/RihlarScreen.png"
                        alt="わくわく探検隊スクリーンショット集"
                        width={1000}
                        height={500}
                    />
                    <div className={styles.Color}>
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
                    <Learned
                        head="言語仕様を踏まえた実装可能性の設計"
                        text={`学んだばかりのインナーシャドウを多用したデザインを採用しましたが、実装段階で Swift では再現が難しいと指摘を受けました。その結果、想定した表現ができずデザインの大幅修正が必要になり、コミュニケーションコストも増える経験をしました。今後は使用言語やフレームワークの制約を理解した上でデザインを行い、実装可能性を踏まえた設計を意識していきたいです。`}
                    />
                    <Link
                        href="https://www.figma.com/design/BFipcBkJSMMyenTxPb4Zkb/Rihlar?node-id=0-1&t=KyslNXli9ts3hwuv-1"
                        className={styles.MoreWork}
                    >
                        デザインファイルを見る
                    </Link>
                    <Lead nextLink="/Wkwk" />
                    <Footer />
                </div>
            </div>
        </main>
    );
}

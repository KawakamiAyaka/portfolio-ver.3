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

                    {/* デザイン + Webサイト */}
                    <Works
                        type="Webサイト"
                        title="FamilyConnect"
                        tags={["個人制作"]}
                        position="担当：企画 / デザイン / コーディング"
                        tools="ツール：Figma / Illustrator / VSCode"
                        designLink="https://www.figma.com/..."
                        websiteLink="https://example.com/wkwk"
                        image="/Fam.png"
                        imageAlt="FamilyConnectのサムネイル"
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
                        alt="FamilyConnectスクリーンショット集"
                        width={1000}
                        height={500}
                    />

                    {/* COLOR セクション */}
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
                                    家族の絆をテーマに、男女問わず親しみやすい印象を与えるために、
                                    暖色と寒色を組み合わせました。
                                    <span className={styles.Main}>寒色で信頼感・落ち着き</span>を、
                                    暖色で<span className={styles.Accent}>あたたかさ・安心感</span>
                                    を表現し、家族の多様な関係性や日常に寄り添う配色を意識しています。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FEATURES セクション */}
                    <div>
                        <Heading text="FEATURES" />
                        <div className={styles.Features}>
                            <div className={styles.FeaturesBox}>
                                <Image
                                    className={styles.HunterMock1}
                                    src="/FamMock1.svg"
                                    alt="FamilyConnect 機能モックアップ1"
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>伝言ボードで気軽に共有</h2>
                                    <p className={styles.Text}>
                                        生活リズムが合わない家庭でも、伝言ボードに自由に書き込んで
                                        <br />
                                        簡単にコミュニケーションを取ることができる機能。
                                        <br />
                                        忙しくても繋がりを感じられる仕組みです。
                                    </p>
                                </div>
                            </div>

                            <div className={styles.FeaturesBox}>
                                <div className={styles.TextBox}>
                                    <h2 className={styles.HeadRight}>
                                        1週間カレンダーで予定を見える化
                                    </h2>
                                    <p className={styles.TextRight}>
                                        「今日の予定は？」と毎日聞かれるストレスを解消。
                                        <br />
                                        できるだけ予定が一目で見れる設計を意識しました。
                                    </p>
                                </div>
                                <Image
                                    className={styles.HunterMock}
                                    src="/FamMock2.svg"
                                    alt="FamilyConnect 機能モックアップ2"
                                    width={400}
                                    height={400}
                                />
                            </div>

                            <div className={styles.FeaturesBox}>
                                <Image
                                    className={styles.HunterMock}
                                    src="/FamMock3.svg"
                                    alt="FamilyConnect 機能モックアップ3"
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>チャット機能で内緒話も</h2>
                                    <p className={styles.Text}>
                                        個別チャットでプライベートなやり取りも可能。
                                        <br />
                                        家族内の秘密の話は個別で。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/FamilyConnect" className={styles.MoreWork}>
                        Webサイトを見る
                    </Link>

                    <Footer />
                </div>
            </div>
        </main>
    );
}

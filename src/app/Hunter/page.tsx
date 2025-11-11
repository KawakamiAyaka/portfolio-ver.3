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
                        alt="ものしりハンタースクリーンショット集"
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
                                <Image
                                    className={styles.HunterMock1}
                                    src="/HunterMock1.svg"
                                    alt="ものしりハンター機能説明用モックアップ"
                                    width={400}
                                    height={200}
                                />
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>
                                        知的好奇心を刺激するものしり機能
                                    </h2>
                                    <p className={styles.Text}>
                                        カメラで物体を撮影すると、ChatGPT APIを活用して
                                        <br />
                                        「名前」と「説明」がひらがなで表示される機能。
                                        <br />
                                        子どもが身近なものに興味を持ち、学びにつながる体験を目指しました。
                                        子どもに馴染む世界観と直感的な操作性を両立できるように意識しました。
                                    </p>
                                </div>
                            </div>

                            <div className={styles.FeaturesBox}>
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>
                                        カード型ひらがな並べ替えミニゲーム
                                    </h2>
                                    <p className={styles.Text}>
                                        撮影した物体の名前をひらがなに分解し、正しい順番に並べるゲーム。
                                        <br />
                                        遊びながら自然にひらがなや単語を覚えられるよう設計しました。
                                        何度でも挑戦できるため、繰り返し遊ぶ中で少しずつ上達できる仕組みです。
                                    </p>
                                </div>
                                <Image
                                    className={styles.HunterMock}
                                    src="/HunterMock2.svg"
                                    alt="ものしりハンター機能説明用モックアップ"
                                    width={400}
                                    height={200}
                                />
                            </div>

                            <div className={styles.FeaturesBox}>
                                <Image
                                    className={styles.HunterMock}
                                    src="/HunterMock3.svg"
                                    alt="ものしりハンター機能説明用モックアップ"
                                    width={400}
                                    height={200}
                                />
                                <div className={styles.TextBox}>
                                    <h2 className={styles.Head}>知識を集める図鑑機能</h2>
                                    <p className={styles.Text}>
                                        これまでに知った物体の名前を自分だけの「知識の本」として
                                        <br />
                                        収集・閲覧できる図鑑機能。
                                        <br />
                                        現実と乖離しない柔らかな装飾と色合いで、プレイ中の世界観を自然に引き継ぐようにデザインしました。
                                        「学ぶ」体験を、子どもにとって身近で温かみのある遊びとして感じられるようにしています。
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

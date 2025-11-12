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
                        tags={["チーム制作", "2年後期"]}
                        summary="カメラで身の回りの物を撮影し名前を知って集めることで、子どもが楽しく学べる知育サイト"
                        period="制作期間：2024年9月〜2月(デザイン設計期間：約2ヶ月半)"
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/design/O7mzbcQDc0YOzjZYrVL9C3/%E3%82%82%E3%81%AE%E3%81%97%E3%82%8A%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC?node-id=0-1&t=izLuy7WPxUnNSYjN-1"
                        websiteLink="https://monosiri-hunter.vercel.app/"
                        image="/Hunter.png"
                        imageAlt="ものしりハンターのサムネイル"
                    />

                    <div className={styles.More}>
                        <More
                            title="課題"
                            subtitle="好奇心を「学びの楽しさ」につなげられていない"
                            text="小さな子どもは、日々たくさんのものに興味を持ちますが、名前を知らないことも多く、せっかくの好奇心が一瞬で終わってしまうことがあります。 そのたびに親が教えることもできますが、毎回対応するのは負担になりがちです。 
                                また、既存の物体認識ツールを使っても「名前を知る」だけで終わってしまい、子どもが夢中になれる「楽しさ」や「続けたくなる仕組み」が欠けています。"
                        />
                        <More
                            title="ターゲット"
                            subtitle="好奇心旺盛な子どもと、学びを支えたい親"
                            text={`・主ターゲット：年長〜小学校低学年の子ども（3〜7歳） カメラを通して「これは何だろう？」と感じた瞬間に楽しめる子です。 
                                ・副ターゲット：子どもの知的好奇心を伸ばしたい保護者です。 外出先や日常の中で、学びのきっかけを与えたいと考えている層です。`}
                        />
                        <More
                            title="ゴール"
                            subtitle="発見から学び、学びから達成感へ"
                            text="知らないものを「発見」し、名前を「知る」ことで喜びを感じます。 集めたものを「図鑑」で振り返ることで、学びの定着と達成感を得ることを目指しています。 遊びながら自然にひらがな・単語を覚えるきっかけを作ることを目的としています。"
                        />
                        <More
                            title="デザイン"
                            subtitle="学びを「遊び」に変えるデザイン体験"
                            text="学ぶことを「義務」ではなく「楽しい遊び」として体験できるようにすることが狙いです。 そのため、子どもが安心して世界に入り込めるよう、世界観を重視したデザインを行いました。 現実とかけ離れない子供部屋のような背景や図鑑モチーフを採用し、日常に馴染む見た目を意識しています。 また、親しみやすい暖色系の色づかいで温かみを与えることで、子どもが自然と触りたくなる「やさしい世界観」を大切にしています。"
                        />
                    </div>

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
                    <Image
                        className={styles.WkwkScreen}
                        src="/HunterScreen.svg"
                        alt="ものしりハンタースクリーンショット集"
                        width={1000}
                        height={500}
                    />

                    <Link href="https://monosiri-hunter.vercel.app/" className={styles.MoreWork}>
                        Webサイトを見る
                    </Link>

                    <Footer />
                </div>
            </div>
        </main>
    );
}

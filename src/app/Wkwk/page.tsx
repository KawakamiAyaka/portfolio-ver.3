import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Lead from "@/components/Lead";
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
                        tags={["チーム制作", "2年前期", "ハッカソン"]}
                        summary="目的地までの道のりが退屈だと感じる子どもたちに、「探索」「競争」「収集」の楽しさを提供するアプリ"
                        period="制作期間：2024年7月〜8月(デザイン設計期間：約2週間)"
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma / Illustrator"
                        designLink="https://www.figma.com/design/4OwOGTdDu1WGINPyLQ7LYN/%E3%82%8F%E3%81%8F%E3%82%8F%E3%81%8F%E6%8E%A2%E6%A4%9C%E9%9A%8A?node-id=0-1&t=vrX3q2dZ2sEjV64E-1"
                        image="/Wkwk.png"
                        imageAlt="わくわく探検隊のサムネイル"
                        note="この作品は現在公開されていません"
                    />
                    <div className={styles.More}>
                        <More
                            title="課題"
                            subtitle=" 道のりの「退屈」を「わくわく」に変えたい"
                            text="外に出かけるわんぱくなお年頃の子どもたちは、目的地までの道のりを退屈に感じることがあります。 しかし、移動そのものに楽しみや達成感を感じる機会は少ないのが現状です。 「どうせ歩くなら、ちょっとワクワクする時間にしたい」そんな想いを叶えることが課題です。"
                        />
                        <More
                            title="ターゲット"
                            subtitle="道のりを「わくわく」に変えたい子どもたち"
                            text={`・主ターゲット：目的地までの時間を退屈に感じる小学生〜中学生 
                                ・副ターゲット：友達や家族とおでかけをもっと楽しみたい子どもたち`}
                        />
                        <More
                            title="ゴール"
                            subtitle="道のりを「探検と達成」の体験にする"
                            text="探索目的地の周辺を歩き、コインを集めながら探検することで移動に発見と達成感を与えることを目指しました。 また、集めたコインでガチャを回してキャラクターを収集し、お気に入りのキャラをトップページに設定できます。 友達と見せ合うことで会話のきっかけが生まれる体験をデザインしています。"
                        />
                        <More
                            title="デザイン"
                            subtitle="探索・競争・収集で「道のりまで楽しく」をデザイン"
                            text="目的地までの道のりを「探索」「競争」「収集」で楽しめるよう設計しました。 コインを探しながら歩くことで小さな発見を生み、友達と競い合うことで達成感を演出します。 ガチャでキャラクターを集めることでコレクションの喜びを加え、歩くことそのものを“遊び”に変えることを狙いました。"
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
                    <Link
                        href="https://www.figma.com/design/4OwOGTdDu1WGINPyLQ7LYN/%E3%82%8F%E3%81%8F%E3%82%8F%E3%81%8F%E6%8E%A2%E6%A4%9C%E9%9A%8A?node-id=0-1&t=vrX3q2dZ2sEjV64E-1"
                        className={styles.MoreWork}
                    >
                        デザインファイルを見る
                    </Link>
                    <Lead nextLink="/Reitime" />
                    <Footer />
                </div>
            </div>
        </main>
    );
}

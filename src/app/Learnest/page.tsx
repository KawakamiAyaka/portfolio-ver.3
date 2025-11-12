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
                        type="Webサイト"
                        title="Learnest（ラーネスト）"
                        tags={["個人制作", "2年後期"]}
                        summary="デザインを学びたい人同士が作品投稿とフィードバックを通じて成長できる学習支援プラットフォーム。"
                        period="制作期間：2024年9月〜2月(デザイン設計期間：約1ヶ月)"
                        position="担当：企画 / デザイン / コーディング"
                        tools="ツール：Figma / Illustrator / VSCode"
                        designLink="https://www.figma.com/design/Ec5sLkNAYrNUPNPEVQJg5Y/Learnest?node-id=1-7&t=l8U4RRcL7m76uHP3-1"
                        websiteLink="https://learnest-lake.vercel.app/"
                        image="/learnest.png"
                        imageAlt="Learnestのサムネイル"
                    />
                    <div className={styles.More}>
                        <More
                            title="課題"
                            subtitle="1人で学ぶデザインには「限界」がある"
                            text="デザインを学びたい人の多くは、「何から始めればいいか分からない」「自分の作品を見てもらう機会がない」「成長の手応えを感じにくい」といった壁に直面しています。 特に独学では、アウトプットに対して客観的な意見をもらう機会が少なく、スキルを高めるための学びの循環が生まれにくいという課題があります。
"
                        />
                        <More
                            title="ターゲット"
                            subtitle="学びを“共有”したいデザイナー"
                            text={`・主ターゲット：デザインを学び始めた学生や初心者デザイナー 
                                ・副ターゲット：自分の作品を公開し、他者からの意見や刺激を得たい学習者`}
                        />
                        <More
                            title="ゴール"
                            subtitle="フィードバックで「学びを循環」させる"
                            text="一人でのデザイン学習の限界を解消し、他者との交流を通して成長を可視化することを目指しています。 ユーザーは自分の作品を投稿し、他の人から意見をもらうことで、自分の表現を客観的に見つめ直すことができます。 また、他者のデザインを見てフィードバックを返すことで新しい発想を得て、学びの循環を生み出します。 「教わる」「見せる」「伝える」の3つが重なり合う中で、ユーザー同士が刺激し合いながら成長できる体験をデザインしました。
"
                        />
                        <More
                            title="デザイン"
                            subtitle="フィードバックを「評価」から「気づき」へ"
                            text="狙いは、フィードバックを単なる評価ではなく、新しい発見や学びにつながる“気づき”の場として機能させることにあります。 投稿やコメントを通して、ユーザー同士が互いの表現を尊重しながら意見を交わすデザインを重視しました。 画面構成では、作品を中心に余白を広く取り、フィードバックが自然に目に入るレイアウトを採用しています。 投稿一覧では“引き出しを増やす”というコンセプトを反映し、他者の作品を見ること自体がインスピレーションにつながる設計としました。 SNS形式の仕組みにより、不特定多数のデザイナーから星評価やコメントで意見をもらえ、共通テーマに沿った投稿によって、より的確で実りあるフィードバックを得られるようにしています。 学ぶ過程そのものをデザインしたプラットフォームとして、ユーザーが“ひとりでは得られない成長体験”を実感できる環境を目指しています。"
                        />
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/LearnestScreen.svg"
                        alt="Learnestスクリーンショット集" // 代替テキスト（必須！）
                        width={1000}
                        height={500}
                    />
                    <div className={styles.Color}>
                        <div>
                            <div className={styles.ColorPalletBox}>
                                <div>
                                    <div className={styles.MainColor}></div>
                                    <p className={styles.ColorCode}>#6084E7</p>
                                </div>
                                <div>
                                    <div className={styles.AccentColor}></div>
                                    <p className={styles.ColorCode}>#6FFF65</p>
                                </div>
                                <div>
                                    <div className={styles.BaseColor}></div>
                                    <p className={styles.ColorCode}>#FFFFFF</p>
                                </div>
                            </div>
                            <div className={styles.ColorText}>
                                <p className={styles.text}>
                                    <span className={styles.Main}>学習の青</span>と
                                    <span className={styles.Accent}>成長の緑</span>
                                    を組み合わせ、白を基調にすることでどんなデザインにも馴染む配色にしました。白に映えるよう発色にもこだわっています。
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="https://learnest-lake.vercel.app/" className={styles.MoreWork}>
                        Webサイトを見る
                    </Link>
                    <Lead nextLink="/Hunter" />
                    <Footer />
                </div>
            </div>
        </main>
    );
}

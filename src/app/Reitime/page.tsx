import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Logo from "@/components/Logo";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

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
                        title="レイタイム"
                        tags={["チーム制作", "1年後期"]}
                        summary="電車遅延時にリアルタイムで振替案や到着予測を提示し、ユーザーの時間を最適化する交通支援アプリ"
                        period="制作期間：2023年9月〜2月(デザイン設計期間：約3ヶ月)"
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma"
                        designLink="https://www.figma.com/design/w241INhxVnaIuXjmGDMpgV/%E3%83%A0%E3%82%B3%E3%82%A6%E3%83%AA%E3%83%A7%E3%82%A6?node-id=0-1&t=8IYiBR1JRd7Nz218-1"
                        websiteLink="https://teamapp-three.vercel.app/"
                        image="/Reitime.png"
                        imageAlt="レイタイムのサムネイル"
                    />
                    <div className={styles.More}>
                        <More
                            title="課題"
                            subtitle="電車遅延による「予定の乱れ」と「不安」"
                            text="通勤や通学など、日常の移動に欠かせない電車。 しかし、遅延が発生すると予定が狂い、次の行動が取りにくくなるという問題があります。 「どの電車に乗ればいいのか」「どれくらい待てばいいのか」が分からず、多くの人が不安やストレスを感じています。"
                        />
                        <More
                            title="ターゲット"
                            subtitle="時間を大切にしたい通勤・通学者"
                            text={`・主ターゲット：毎日の通勤・通学で電車を利用する人 
                                ・副ターゲット：予定管理を重視し、効率的に行動したいビジネスマン`}
                        />
                        <More
                            title="ゴール"
                            subtitle="遅延時でも「最適な行動」をすぐに取れるように"
                            text="遅延が発生しても、ユーザーがすぐに最適な行動を取れるようにすることを目指しています。 登録した区間に遅延が発生するとリアルタイムで通知し、待ち時間を最小限にします。 振替案を自動提案し、カウントダウン機能で電車到着までの時間を一目で確認できるようにしました。 これらの機能により、利用者が「次に何をすればいいか」をすぐに判断できる体験をデザインしています。"
                        />
                        <More
                            title="デザイン"
                            subtitle="遅延の「ストレス」を「安心」に変えるデザイン"
                            text="電車遅延という避けられない問題を、デザインの力で“安心”に変えることを狙いました。 リアルタイム通知とカウントダウン表示で即時対応をサポートし、振替案提案で行動の選択肢を提示して迷いを減らしました。 シンプルで見やすいUIにより、通勤中でも片手で操作できる設計としています。 遅延が発生しても、焦らず、無駄なく、次の一歩を踏み出せる。 「時間を守る」ことをデザインで支えます。"
                        />
                    </div>
                    <div className={styles.Color}>
                        <Heading text="COLOR" />
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
                                駅や車内などさまざまなシーンで見やすいよう、
                                <span className={styles.Main}>緑を基調</span>とし、
                                信号機のように直感的に情報を識別できる
                                <span className={styles.Accent}>アクセントカラー</span>を採用。
                                全体に柔らかいグレーで安心感をもたせています。
                            </p>
                        </div>
                    </div>
                    <Image
                        className={styles.WkwkScreen}
                        src="/RaitimeScreen.svg"
                        alt="レイタイムスクリーンショット集"
                        width={1000}
                        height={500}
                    />
                    <Link href="https://teamapp-three.vercel.app/" className={styles.MoreWork}>
                        Webサイトを見る
                    </Link>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

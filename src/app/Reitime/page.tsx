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
                        tags={["チーム制作"]}
                        position="担当：企画 / デザイン"
                        tools="ツール：Figma"
                        designLink="https://www.figma.com/design/w241INhxVnaIuXjmGDMpgV/%E3%83%A0%E3%82%B3%E3%82%A6%E3%83%AA%E3%83%A7%E3%82%A6?node-id=0-1&t=8IYiBR1JRd7Nz218-1"
                        websiteLink="https://teamapp-three.vercel.app/"
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
                        alt="レイタイムスクリーンショット集"
                        width={1000}
                        height={500}
                    />
                    {/* COLORセクション */}
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
                    <Heading text="FEATURES" />

                    <div className={styles.Features}>
                        <div className={styles.FeaturesBox}>
                            <Image
                                className={styles.HunterMock1}
                                src="/RaitimeMock1.svg"
                                alt="レイタイム機能モックアップ"
                                width={400}
                                height={400}
                            />
                            <div className={styles.TextBox}>
                                <h2 className={styles.Head}>リアルタイム振替ルート提案</h2>
                                <p className={styles.Text}>
                                    遅延や運休を自動検知し、目的地までの最適ルートを瞬時に提示。
                                    <br />
                                    到着予測時間や乗り換え情報も視覚的にわかりやすく表示します。
                                </p>
                            </div>
                        </div>

                        <div className={styles.FeaturesBox}>
                            <div className={styles.TextBox}>
                                <h2 className={styles.HeadRight}>混雑・到着予測の可視化</h2>
                                <p className={styles.TextRight}>
                                    AI予測データをもとに、電車の混雑度や到着時刻を自動で更新。
                                    <br />
                                    通勤ストレスを軽減し、利用者が先回りして行動できるよう支援します。
                                </p>
                            </div>
                            <Image
                                className={styles.HunterMock}
                                src="/RaitimeMock2.svg"
                                alt="レイタイム機能モックアップ"
                                width={400}
                                height={400}
                            />
                        </div>

                        <div className={styles.FeaturesBox}>
                            <Image
                                className={styles.HunterMock}
                                src="/RaitimeMock3.svg"
                                alt="レイタイム機能モックアップ"
                                width={400}
                                height={400}
                            />
                            <div className={styles.TextBox}>
                                <h2 className={styles.Head}>時間を見える化するタイムライン</h2>
                                <p className={styles.Text}>
                                    通勤ルート上の出来事や到着予定を時系列に整理。
                                    <br />
                                    朝の忙しい時間帯でも一目で判断できるデザインを意識しました。
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="https://teamapp-three.vercel.app/" className={styles.MoreWork}>
                        Webサイトを見る
                    </Link>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

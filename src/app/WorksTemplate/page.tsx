import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import More from "@/components/More";
import Logo from "@/components/Logo";
import styles from "./page.module.css";

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
                        image="/SampleImage.svg"
                        imageAlt="わくわく探検隊のサムネイル"
                        note="この作品は現在公開されていません"
                    />
                    <div className={styles.More}>
                        <More
                            title="制作背景"
                            text="自由テーマのハッカソンで、子供たちが移動時間を楽しく過ごせるように工夫した作品を開発しました。"
                        />
                        <More
                            title="制作背景"
                            text="自由テーマのハッカソンで、子供たちが移動時間を楽しく過ごせるように工夫した作品を開発しました。"
                        />
                        <More
                            title="制作背景"
                            text="自由テーマのハッカソンで、子供たちが移動時間を楽しく過ごせるように工夫した作品を開発しました。"
                        />
                        <More
                            title="制作背景"
                            text="自由テーマのハッカソンで、子供たちが移動時間を楽しく過ごせるように工夫した作品を開発しました。"
                        />
                    </div>
                    <div className={styles.Wrap}>
                        <div className={styles.Logo}>
                            <Heading text="LOGO" />
                            <Logo
                                text="ここにロゴに込めた思い"
                                image="/LogoSample.svg"
                                imageAlt="わくわく探検隊のロゴ"
                            />
                        </div>
                        <div className={styles.Color}>
                            <Heading text="COLOR" />
                            <div>
                                <div className={styles.ColorPalletBox}>
                                    <div className={styles.MainColor}></div>
                                    <div className={styles.AccentColor}></div>
                                    <div className={styles.BaseColor}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

import Header from "@/components/Header";
import Heading from "@/components/Heading";
import BackToTop from "@/components/BackToTop";
import WorksThumbnail from "@/components/WorksThumbnail";
import Footer from "@/components/Footer";

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Profile() {
    return (
        <main>
            <Header />
            <div className={styles.NoteBox}>
                <div className={styles.NotePage}>
                    <BackToTop />
                    <Heading text="WORKS" />
                    <div className={styles.Pickup}>
                        <div className={styles.ThumbnailBox}>
                            <Image
                                className={styles.WkwkThumbnail}
                                src="/WkwkThumbnail.png" // public/vercel.svg に置いた画像
                                alt="わくわく探検隊のサムネイル" // 代替テキスト（必須！）
                                width={1090}
                                height={450}
                            />
                            <p>移動が退屈だと感じる子供たちにわくわくを提供するゲームアプリ</p>
                            <Link href="/wkwktannkenntai" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                        <div className={styles.ThumbnailBox}>
                            <Image
                                className={styles.HunterThumbnail}
                                src="/HunterThumbnail.png" // public/vercel.svg に置いた画像
                                alt="ものしりハンターのサムネイル" // 代替テキスト（必須！）
                                width={1090}
                                height={500}
                            />
                            <p>かざして発見！ 学びと遊びが一体となった子供向けサイト</p>
                            <Link href="/Hunter" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                        <div className={styles.ThumbnailBox}>
                            <Image
                                className={styles.RihlarThumbnail}
                                src="/RihlarThumbnail.png" // public/vercel.svg に置いた画像
                                alt="リフラルのサムネイル" // 代替テキスト（必須！）
                                width={1090}
                                height={500}
                            />
                            <p>歩いた場所が自分の陣地に。陣取り型ライフログアプリ</p>
                            <Link href="/Rihlar" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                    </div>
                    <div className={styles.WorksBox}>
                        <WorksThumbnail
                            image="SampleImage.svg"
                            type="Webサイト"
                            title="レイタイム"
                        />
                        <WorksThumbnail
                            image="SampleImage.svg"
                            type="Webサイト"
                            title="レイタイム"
                        />
                        <WorksThumbnail
                            image="SampleImage.svg"
                            type="Webサイト"
                            title="レイタイム"
                        />
                        <WorksThumbnail
                            image="SampleImage.svg"
                            type="Webサイト"
                            title="レイタイム"
                        />
                        <WorksThumbnail
                            image="SampleImage.svg"
                            type="Webサイト"
                            title="レイタイム"
                        />
                        <WorksThumbnail
                            image="SampleImage.svg"
                            type="Webサイト"
                            title="レイタイム"
                        />
                    </div>

                    <Footer />
                </div>
            </div>
        </main>
    );
}

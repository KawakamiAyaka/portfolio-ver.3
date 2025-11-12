import Header from "@/components/Header";
import Heading from "@/components/Heading";
import BackToTop from "@/components/BackToTop";
import SkillBar from "@/components/SkillBar";
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
                    <Heading text="PROFILE" />
                    <div className={styles.ProfileBox}>
                        <Image
                            className={styles.MyImage}
                            src="/MyImage.svg" // public/vercel.svg に置いた画像
                            alt="顔写真" // 代替テキスト（必須！）
                            width={300}
                            height={320}
                        />
                        <div className={styles.Introductions}>
                            <p className={styles.Furigana}>Kawakami Ayaka</p>
                            <div className={styles.NameBox}>
                                <h2 className={styles.Name}>川上采華</h2>
                                <p className={styles.Year}>
                                    <span>26</span>年卒
                                </p>
                            </div>
                            <p>ECCコンピュータ専門学校 マルチメディア研究学科 Webデザインコース</p>
                            <p className={styles.Text}>
                                子どもの頃から「ものづくり」と「パソコンを使うこと」が好きで、その2つを組み合わせられるWebデザインに惹かれました。
                                「人の心を動かす体験をつくりたい」という想いからデザイナーを志し、感情を通じて問題を解決することを大切にしています。
                                <br />
                                相手の気持ちに寄り添い、本当に求めているものを形にすることで、心に届くデザインを生み出したい。
                                将来は、チームやクライアントと共に学び合い、成長を広げていけるデザイナーを目指しています。
                            </p>
                            <Image
                                className={styles.MyImage}
                                src="/Hobby.svg"
                                alt="顔写真"
                                width={600}
                                height={150}
                            />
                            <BackToTop />
                        </div>
                    </div>
                    <div className={styles.SkillBox}>
                        <Heading text="SKILL" />
                        <div className={styles.Skill}>
                            <Image
                                className={styles.SkillIcon}
                                src="/SkillIcon.svg"
                                alt="スキルアイコン"
                                width={1000}
                                height={120}
                            />
                        </div>
                    </div>
                    <Heading text="ACHIEVEMENT" />
                    <div className={styles.AchievementBox}>
                        <div className={styles.Achievement}>
                            <Image
                                className={styles.FamAchievement}
                                src="/RihlarAchievement.svg" // public/vercel.svg に置いた画像
                                alt="Rihlar銅賞受賞" // 代替テキスト（必須！）
                                width={200}
                                height={200}
                            />
                            <Link href="/Rihlar" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>

                        <div className={styles.Achievement}>
                            <Image
                                className={styles.HunterAchievement}
                                src="/HunterAchievement2.svg" // public/vercel.svg に置いた画像
                                alt="ものしりハンター敢闘賞受賞" // 代替テキスト（必須！）
                                width={200}
                                height={200}
                            />
                            <Link href="/Hunter" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                        <div className={styles.Achievement}>
                            <Image
                                className={styles.HunterAchievement}
                                src="/HunterAchievement.svg" // public/vercel.svg に置いた画像
                                alt="ものしりハンターアイデア賞受賞" // 代替テキスト（必須！）
                                width={200}
                                height={200}
                            />
                            <Link href="/Hunter" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                        <div className={styles.Achievement}>
                            <Image
                                className={styles.wkwkAchievement}
                                src="/WkwkAchievement.svg" // public/vercel.svg に置いた画像
                                alt="わくわく探検隊努力賞受賞" // 代替テキスト（必須！）
                                width={200}
                                height={200}
                            />
                            <Link href="/Wkwk" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                        {/* <div className={styles.Achievement}>
                            <Image
                                className={styles.FamAchievement}
                                src="/FamAchievement.svg" // public/vercel.svg に置いた画像
                                alt="FamilyConnect新人賞受賞" // 代替テキスト（必須！）
                                width={160}
                                height={177}
                            />
                            <Link href="/FamilyConnect" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div> */}
                    </div>
                    <div className={styles.HistoryBox}>
                        <ul className={styles.timeline}>
                            <li className={styles.item}>
                                <div className={styles.time}>2025年9月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>学内展示会 +E展（3年前期）銅賞</div>
                            </li>

                            <li className={styles.item}>
                                <div className={styles.time}>2025年3月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    学内展示会 +E展（2年後期）敢闘賞
                                </div>
                            </li>

                            <li className={styles.item}>
                                <div className={styles.time}>2025年3月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    Hack U　3回目 参加 <br />
                                    <small>
                                        <a
                                            href="https://hacku.yahoo.co.jp/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            LINEヤフー株式会社が主催する、日本最大級の学生向けハッカソンイベント
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2025年1月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    専門学校HTML5作品アワード　アイデア賞受賞 <br />
                                    <small>
                                        <a
                                            href="https://html5award.com//"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            日本国内の専門学校生がHTML5技術をメインに使用して制作したアプリ、Webサービス、Webサイトなどの作品を
                                            <br />
                                            対象としたコンテスト
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年10月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    JP Hacks　参加
                                    <br />
                                    <small>
                                        <a
                                            href="https://jphacks.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            学生が短期間で集中的にプロダクトを開発・発表し、イノベーションを生み出すことを目的とした、日本最大規模の
                                            <br />
                                            学生向けハックイベント
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年9月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    Tech.Summer Camp　参加
                                    <br />
                                    <small>
                                        <a
                                            href="https://tsc.nxtend.or.jp/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            「学生エンジニアが体験できる最高峰を提供する」をモットーに開催されているハッカソンイベント
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年8月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    Hack U　2回目 参加 <br />
                                    <small>
                                        <a
                                            href="https://hacku.yahoo.co.jp/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            LINEヤフー株式会社が主催する、日本最大級の学生向けハッカソンイベント
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年7月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    若年者ものづくり競技大会　出場 <br />
                                    <small>
                                        <a
                                            href="https://www.javada.or.jp/jyakunen20/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            厚生労働省主催、20歳以下の若年者を対象とした技能競技大会
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年6月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    技育Camp　努力賞 <br />
                                    <small>
                                        <a
                                            href="https://geek.supporterz.jp/geekcamp/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            サポーターズ主催、学生エンジニアの成長支援を目的としたオンライン技術イベント
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年3月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    Hack U　1回目 参加 <br />
                                    <small>
                                        <a
                                            href="https://hacku.yahoo.co.jp/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            LINEヤフー株式会社が主催する、日本最大級の学生向けハッカソンイベント
                                        </a>
                                    </small>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.time}>2024年3月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>
                                    学内展示会 +E展（1年後期）新人賞
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

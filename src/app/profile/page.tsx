import Header from "@/components/Header";
import Heading from "@/components/Heading";
import BackToTop from "@/components/BackToTop";
import SkillBar from "@/components/SkillBar";
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
                                2004年11月生まれ、奈良県出身。
                                <br />
                                子どもの頃から「ものづくり」と「パソコンを使うこと」が好きで、その2つを組み合わせられるWebデザインの世界に魅力を感じました。
                                <br />
                                専門学校で学ぶ中で、自身のモットーである 「心を動かすデザイン」
                                を大切にし、ユーザーの感情に働きかけ、記憶に残る体験を届けられるデザイナーを目指しています。
                            </p>
                            <Image
                                className={styles.MyImage}
                                src="/Hobby.svg" // public/vercel.svg に置いた画像
                                alt="顔写真" // 代替テキスト（必須！）
                                width={600}
                                height={150}
                            />
                            <BackToTop />
                        </div>
                    </div>
                    <div className={styles.SkillBox}>
                        <Heading text="SKILL" />
                        <div className={styles.Skill}>
                            <div className={styles.DesignSkill}>
                                <SkillBar
                                    label="Figma"
                                    percent={85}
                                    color="#94CB9B"
                                    borderColor="#94CB9B"
                                    fillColor="#DFF2E1" // オレンジの薄色ベース
                                />
                                <SkillBar
                                    label="Illustrator"
                                    percent={80}
                                    color="#94CB9B"
                                    borderColor="#94CB9B"
                                    fillColor="#DFF2E1" // オレンジの薄色ベース
                                />
                                <SkillBar
                                    label="Photoshop"
                                    percent={75}
                                    color="#94CB9B"
                                    borderColor="#94CB9B"
                                    fillColor="#DFF2E1" // オレンジの薄色ベース
                                />
                            </div>
                            <div className={styles.CodingSkill}>
                                <SkillBar
                                    label="HTML"
                                    percent={80}
                                    color="#9ACAC4"
                                    borderColor="#9ACAC4"
                                    fillColor="#e4f5f3ff" // オレンジの薄色ベース
                                />
                                <SkillBar
                                    label="CSS"
                                    percent={80}
                                    color="#9ACAC4"
                                    borderColor="#9ACAC4"
                                    fillColor="#e4f5f3ff" // オレンジの薄色ベース
                                />
                                <SkillBar
                                    label="Javascript"
                                    percent={72}
                                    color="#9ACAC4"
                                    borderColor="#9ACAC4"
                                    fillColor="#e4f5f3ff" // オレンジの薄色ベース
                                />
                                <SkillBar
                                    label="Next . js"
                                    percent={72}
                                    color="#9ACAC4"
                                    borderColor="#9ACAC4"
                                    fillColor="#e4f5f3ff" // オレンジの薄色ベース
                                />
                            </div>
                        </div>
                    </div>
                    <Heading text="ACHIEVEMENT" />
                    <div className={styles.AchievementBox}>
                        <div className={styles.Achievement}>
                            <Image
                                className={styles.HunterAchievement}
                                src="/HunterAchievement2.svg" // public/vercel.svg に置いた画像
                                alt="ものしりハンター敢闘賞受賞" // 代替テキスト（必須！）
                                width={170}
                                height={177}
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
                                width={170}
                                height={177}
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
                                width={170}
                                height={177}
                            />
                            <Link href="/wkwktannkenntai" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                        <div className={styles.Achievement}>
                            <Image
                                className={styles.FamAchievement}
                                src="/FamAchievement.svg" // public/vercel.svg に置いた画像
                                alt="FamilyConnect新人賞受賞" // 代替テキスト（必須！）
                                width={170}
                                height={177}
                            />
                            <Link href="/FamilyConnect" className={styles.MoreWork}>
                                この作品を見る
                            </Link>
                        </div>
                    </div>
                    <div className={styles.HistoryBox}>
                        <ul className={styles.timeline}>
                            <li className={styles.item}>
                                <div className={styles.time}>2025年3月</div>
                                <div className={styles.line}></div>
                                <div className={styles.content}>学内展示会 +E展（2年後期）入賞</div>
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
                                    専門学校HTML5作品アワード　入賞 <br />
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
                                    技育Camp　入賞 <br />
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
                                <div className={styles.content}>学内展示会 +E展（1年後期）入賞</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

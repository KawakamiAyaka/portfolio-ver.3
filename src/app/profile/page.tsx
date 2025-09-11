import Header from "@/components/Header";
import styles from "./page.module.css";

export default function Profile() {
    return (
        <main>
            <Header />
            <div className={styles.NoteBox}>
                <div className={styles.NotePage}></div>
            </div>
        </main>
    );
}

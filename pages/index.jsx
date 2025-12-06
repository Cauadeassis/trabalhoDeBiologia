import styles from "../styles/main.module.css"
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Head from "next/head";

export default function Page() {
    return (
        <div className={styles.body}>
            <Head>
                <title>Tecido Epitelial</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <section id="introduction" className={styles.section}>
                    <h2>O que é Tecido Epitelial?</h2>
                    <p>Reveste as superfícies e forma glândulas.</p>
                </section>
                <aside id="aside" className={styles.aside}>
                    <h2>Características</h2>
                    <ul className="bullet-list">
                        <li>Justaposição</li>
                        <li>Avascular</li>
                        <li>Regeneração rápida</li>
                        <li>Polaridade</li>
                    </ul>
                </aside>
                <section id="types" className={styles.section}>
                    <h2>Tipos de tecido epitelial</h2>
                    <div>
                        <ul>
                            <li>Justaposição</li>
                            <li>Avascular</li>
                            <li>Regeneração rápida</li>
                            <li>Polaridade</li>
                        </ul>
                    </div>
                </section>
                <section id="functions" className={styles.section}>
                    <h2>Funções</h2>
                    <ul>
                        <li>Proteção</li>
                        <li>Absorção</li>
                        <li>Secreção</li>
                        <li>Sensibilidade</li>
                    </ul>
                </section>
                <section id="glandular" className={styles.section}>
                    <h2>Tecido Glandular</h2>
                    <ul>
                        <li>Endócrino</li>
                        <li>Exócrino</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}
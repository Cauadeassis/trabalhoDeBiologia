import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import { cards } from "../lib/cards.js";
import styles from "../styles/main.module.css";

export default function Page() {
    const router = useRouter();
    const handleCardClick = (cardTitle) => {
        const selectedCard = cards.find(card => card.title === cardTitle);
        if (selectedCard) {
            localStorage.setItem("card", JSON.stringify(selectedCard));
            router.push("/secondaryPage/secondaryPage");
        }
    };
    return (
        <div className={styles.body}>
            <Head>
                <title>Tecido Epitelial</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <main className={styles.main}>
                <section id="introduction" className={styles.section}>
                    <h2>O que é o tecido epitelial?</h2>
                    <p>É o tecido que reveste superfícies do corpo, como a pele, órgãos internos e forma glândulas.</p>
                </section>
                <aside id="aside" className={styles.section}>
                    <h2>Onde é encontrado?</h2>
                    <ul>
                        <li onClick={() => handleCardClick("Pele")}>Pele;</li>
                        <li onClick={() => handleCardClick("Superfície dos órgãos")}>Superfície de órgãos;</li>
                        <li onClick={() => handleCardClick("Vias respiratórias")}>Vias respiratórias;</li>
                        <li onClick={() => handleCardClick("Trato digestório")}>Trato digestório;</li>
                        <li onClick={() => handleCardClick("Bexiga")}>Bexiga;</li>
                        <li onClick={() => handleCardClick("Glândulas")}>Glândulas</li>
                    </ul>
                </aside>
                <section id="characteristics" className={styles.section}>
                    <h2>Características</h2>
                    <ul>
                        <li onClick={() => handleCardClick("Justaposição")}>Justaposição</li>
                        <li onClick={() => handleCardClick("Avascularização")}>Avascular</li>
                        <li onClick={() => handleCardClick("Regeneração rápida")}>Regeneração rápida</li>
                    </ul>
                </section>
                <section id="functions" className={styles.section}>
                    <h2>Funções</h2>
                    <ul>
                        <li onClick={() => handleCardClick("Proteção")}>Proteção</li>
                        <li onClick={() => handleCardClick("Absorção")}>Absorção</li>
                        <li onClick={() => handleCardClick("Secreção")}>Secreção</li>
                        <li onClick={() => handleCardClick("Excreção")}>Excreção</li>
                        <li onClick={() => handleCardClick("Sensibilidade")}>Sensibilidade</li>
                        <li onClick={() => handleCardClick("Transporte")}>Transporte</li>
                    </ul>
                </section>
                <section id="types" className={styles.section}>
                    <h2>Tipos</h2>
                    <ul>
                        <li onClick={() => handleCardClick("Epitélio de revestimento")}>Epitélio de revestimento</li>
                        <li onClick={() => handleCardClick("Epitélio glandular")}>Epitélio Glandular</li>
                    </ul>
                </section>
                <section id="especializations" className={styles.section}>
                    <h2>Especializações</h2>
                    <ul>
                        <li onClick={() => handleCardClick("Microvilosidades")}>Microvilosidades</li>
                        <li onClick={() => handleCardClick("Cílios")}>Cílios</li>
                        <li onClick={() => handleCardClick("Desmossomos")}>Desmossomos</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div >
    );
}
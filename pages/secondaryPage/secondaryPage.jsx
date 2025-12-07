import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./secondaryPage.module.css";

export default function SecondaryPage() {
    const [card, setCard] = useState(null);
    useEffect(() => {
        const stored = localStorage.getItem("card");
        if (stored) {
            const parsed = JSON.parse(stored);
            setCard(parsed);
            document.title = parsed.title.split(" ")[0];
        }
    }, []);
    if (!card) {
        return <p>Carregando...</p>;
    }
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{card.title.split(" ")[0]}</title>
            </Head>
            <div className={styles.body}>
                <header>
                    <a href="/" className={styles.mainTitle}>
                        <h1>Tecido Epitelial</h1>
                    </a>
                </header>
                <main>
                    <section className={styles.titleContainer}>
                        <h2>{card.title}</h2>
                    </section>
                    <section className={styles.imageContainer}>
                        <img
                            src={card.image}
                            alt={`Foto de ${card.title}`}
                        />
                    </section>
                    <section className={styles.descriptionContainer}>
                        <p>{card.description}</p>
                    </section>
                </main>
            </div>
        </>
    );
}
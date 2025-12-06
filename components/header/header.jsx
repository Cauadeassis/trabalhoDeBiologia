import React from "react";
import styles from "./header.module.css";
import sharedStyles from "../../styles/shared.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Tecido Epitelial</h1>
            <nav className={styles.nav}>
                <a href="#introduction" className={sharedStyles.glassLink}>Introdução</a>
                <a href="#types" className={sharedStyles.glassLink}>Tipos</a>
                <a href="#functions" className={sharedStyles.glassLink}>Funções</a>
                <a href="#glandular" className={sharedStyles.glassLink}>Glandular</a>
                <a href="#quiz" className={sharedStyles.glassLink}>Quiz</a>
            </nav>
        </div>
    );
}
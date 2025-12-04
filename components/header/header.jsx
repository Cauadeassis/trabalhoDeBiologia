import React from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Tecido Epitelial</h1>
            <nav className={styles.nav}>
                <button data-target="introduction">Introdução</button>
                <button data-target="types">Tipos</button>
                <button data-target="functions">Funções</button>
                <button data-target="glandular">Glandular</button>
                <button data-target="quiz">Quiz</button>
            </nav>
        </div>)
}
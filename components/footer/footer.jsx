import React from "react";
import styles from "./footer.module.css";
import sharedStyles from "../../styles/shared.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p>Direitos reservados © 2025</p>
                <h2>Membros</h2>
                <ul>
                    <a href="#" className={sharedStyles.glassLink}>Caleb Jorge</a>
                    <a href="#" className={sharedStyles.glassLink}>Cauã de Assis</a>
                    <a href="#" className={sharedStyles.glassLink}>João Vitor</a>
                    <a href="#" className={sharedStyles.glassLink}>Paulo César</a>
                    <a href="#" className={sharedStyles.glassLink}>Samuel Soares</a>
                    <a href="#" className={sharedStyles.glassLink}>Thiago Cascelli</a>
                </ul>
            </div>
        </footer>
    );
}
import React from "react";
import sharedStyles from "../shared.module.css";

export default function Footer() {
    return (
        <footer className={sharedStyles.modernLayout}>
            <p>Direitos reservados © 2025</p>
            <h2 className={sharedStyles.mainTitle}>Membros</h2>
            <ul className={sharedStyles.list}>
                <a href="https://www.instagram.com/caleb_joorg/" >Caleb Jorge</a>
                <a href="https://www.instagram.com/sk8_cauaa/" >Cauã de Assis</a>
                <a href="https://www.instagram.com/vttr_jv/" >João Vitor</a>
                <a href="https://www.instagram.com/pcleitao/" >Paulo César</a>
                <a href="https://www.instagram.com/samuelsoares1346/" >Samuel Soares</a>
                <a href="https://www.instagram.com/thiago_acn/" >Thiago Cascelli</a>
            </ul>
        </footer>
    );
}
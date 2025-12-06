import React from "react";
import sharedStyles from "../shared.module.css";

export default function Footer() {
    return (
        <footer className={sharedStyles.modernLayout}>
            <p>Direitos reservados © 2025</p>
            <h2 className={sharedStyles.mainTitle}>Membros</h2>
            <ul className={sharedStyles.list}>
                <a href="#" >Caleb Jorge</a>
                <a href="#" >Cauã de Assis</a>
                <a href="https://www.instagram.com/vttr_jv/" >João Vitor</a>
                <a href="#" >Paulo César</a>
                <a href="#" >Samuel Soares</a>
                <a href="#" >Thiago Cascelli</a>
            </ul>
        </footer>
    );
}
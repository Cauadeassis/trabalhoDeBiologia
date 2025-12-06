import React from "react";
import sharedStyles from "../shared.module.css";

export default function Header() {
    return (
        <div className={sharedStyles.modernLayout}>
            <h1 className={sharedStyles.mainTitle}>Tecido Epitelial</h1>
            <nav className={sharedStyles.list}>
                <a href="#introduction" >Introdução</a>
                <a href="#types" >Tipos</a>
                <a href="#functions"> Funções</a>
                <a href="#glandular" >Glandular</a>
                <a href="#quiz" >Quiz</a>
            </nav>
        </div>
    );
}
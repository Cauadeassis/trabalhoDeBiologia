import React from "react";
import sharedStyles from "../shared.module.css";

export default function Header() {
    return (
        <div className={sharedStyles.modernLayout}>
            <h1 className={sharedStyles.mainTitle}>Tecido Epitelial</h1>
            <nav className={sharedStyles.list}>
                <a href="#introduction" >Introdução</a>
                <a href="#characteristics" >Características</a>
                <a href="#functions"> Funções</a>
                <a href="#types" >Tipos</a>
                <a href="#especializations" >Especializações</a>
                <a href="#quiz" >Quiz</a>
            </nav>
        </div>
    );
}
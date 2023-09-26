import React from "react";
import "../components/styles/header.style.css";
import logo from '../assets/images/logo.png'

function Header() {
    return (
        <div className="header">
            <div className="menu-top">
                {/*<img src="{logo}" id="img"/>*/}
                <div className="logo"></div>
                <div className="buttons">
                    <button>Abra sua conta</button>
                    <button id="btn-secondary">Acessar</button>
                </div>
            </div>
            <div className="text">
                <h1 className="title-main">O banco digital feito para <b>você</b> :)</h1>
            </div>
        </div>
    );
}

export default Header;
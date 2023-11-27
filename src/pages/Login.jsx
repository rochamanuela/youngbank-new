import React from "react";
import "../components/styles/login.style.css";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <div className="main">
                <div className="menu-top">
                    <div className="logo"></div>
                </div>
                <div className="content">
                    <div className="form">
                        <h1>Login</h1>
                        <p className="text-new">Bem vindo novamente! Faça login para acessar sua conta</p>
                        <form action="" method="post">
                            <input type="email" name="email" id="email" placeholder="E-mail" className="custom-input" />
                            <input type="password" name="senha" id="senha" placeholder="Senha" className="custom-input" />
                            <input type="submit" value="Acessar" />
                        </form>
                        <p className="text-new" id="link-final">Ainda não é cliente YoungBank? <b>Crie sua conta aqui</b></p>
                        <Link to="/login">entrar</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
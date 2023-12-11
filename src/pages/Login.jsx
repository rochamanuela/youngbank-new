import React from "react";
import "../components/styles/login.style.css";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

import { useState } from "react";
import { useUser } from "../UserContext";
import axiosInstance from "../services/axiosInstance";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/v1/auth/token/login/", {
                method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Login bem-sucedido, obtém o token da resposta
                const responseData = await response.json();
                const token = responseData.token; // Certifique-se de substituir "token" pelo nome real do campo em sua resposta

                // Armazena o token no localStorage ou em algum estado global (você pode usar useContext ou Redux, por exemplo)
                localStorage.setItem("token", token);

                // Redireciona para a página de dados da conta usando a tag Link
                return <Link to="/inicial" />;
            } else {
                // Tratar erro de login aqui
                console.error("Erro no login");
            }
        } catch (error) {
            console.error("Erro ao processar a solicitação", error);
        }
    };


    return (
        <div>
            <div className="main-login">
                <div className="menu-top">
                    <div className="logo"></div>
                </div>
                <div className="content-login">
                    <div className="form">
                        <h1>Login</h1>
                        <p className="text-new">Bem vindo novamente! Faça login para acessar sua conta</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                className="custom-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input type="password"
                                name="senha"
                                id="senha"
                                placeholder="Senha"
                                className="custom-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input type="submit" value="Acessar" />
                        </form>
                        <p className="text-new" id="link-final">Ainda não é cliente YoungBank? <b>Crie sua conta aqui</b></p>
                        {/*<Link to="/inicial">entrar</Link>*/}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;

// feaa60e25e23f21eccbcd07b3e3528a3884f9e1b
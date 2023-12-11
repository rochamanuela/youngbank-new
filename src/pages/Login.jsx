import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../components/styles/login.style.css";
import Footer from "../components/Footer";
import { useUser } from "../UserContext";
import axiosInstance from "../services/axiosInstance";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('auth/token/login/', {
                email: email,
                password: password,
            });

            console.log(response.data);

            if (response.status === 200) {
                const responseData = response.data;
                const token = responseData.token;
                localStorage.setItem("token", token);
                
                console.log(token)

                // Redireciona para a página de dados da conta usando o Link
                window.location.href = "/inicial";
            } else {
                // Tratar erro de login aqui
                setError("Erro no login");
            }
        } catch (error) {
            console.error("Erro ao processar a solicitação", error);
            setError("Erro ao processar a solicitação");
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
                        <p className="text-new">Bem-vindo novamente! Faça login para acessar sua conta</p>
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                className="custom-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                type="password"
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
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;

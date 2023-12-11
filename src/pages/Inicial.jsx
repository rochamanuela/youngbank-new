import React, { useEffect, useState } from "react";
import "../components/styles/inicial.style.css";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import axiosInstance from "../services/axiosInstance";

function Inicial() {
    // Estado para armazenar os dados do usuário
    const [userData, setUserData] = useState(null);
    const [userSaldo, setSaldo] = useState(null);

    // Efeito colateral para carregar os dados do usuário após a montagem do componente
    useEffect(() => {
        // Token de autenticação (simulado, deve ser tratado de forma segura em produção)
        const token = 'feaa60e25e23f21eccbcd07b3e3528a3884f9e1b';

        // Verifica se o token está presente
        if (token) {
            loadUserData(token); // Carrega os dados do usuário usando o token
        }
    }, []);

    // Função assíncrona para carregar os dados do usuário
    const loadUserData = async () => {
        try {
            // Requisição GET para obter os dados do usuário
            const dados = await axiosInstance.get(
                'cliente_pf/',
                {
                    headers: {
                        'Authorization': `Token feaa60e25e23f21eccbcd07b3e3528a3884f9e1b`,
                    },
                }
            );

            console.log(dados.data);

            // Verifica se a propriedade 'nome' está presente nos dados
            if (dados.data.length > 0 && dados.data[0].nome !== undefined) {
                console.log(dados.data[0].nome);
                setSaldo(dados.data[0]); // Atualiza o estado com os dados do usuário
            } else {
                console.error('Propriedade não encontrada na resposta.');
            }
        } catch (error) {
            console.error("Erro ao processar a solicitação", error);
        }
    };

    // const loadSaldo = async () => {
    //     try {
    //         const dados = await axiosInstance.get(
    //             'conta/',
    //             {
    //                 headers: {
    //                     'Authorization': `Token feaa60e25e23f21eccbcd07b3e3528a3884f9e1b`,
    //                 },
    //             }
    //         );

    //         console.log(dados.data);

    //         // Verifica se a propriedade 'saldo' está presente nos dados
    //         if (dados.data.length > 0 && dados.data[0].saldo !== undefined) {
    //             console.log(dados.data[0].saldo);
    //             setSaldo(dados.data[0]); // Atualiza o estado com os dados do saldo
    //         } else {
    //             console.error('Propriedade não encontrada na resposta.');
    //         }
    //     } catch (error) {
    //         console.error("Erro ao processar a solicitação", error);
    //     }
    // };

    // Componente principal
    return (
        <div>
            <div className="main">
                {/* Seção do menu superior */}
                <div className="menu-top">
                    {/* Linha do menu */}
                    <div className="menu-row">
                        <div className="logo"></div>
                        <p>O banco digital feito para <b>você :)</b></p>
                    </div>
                    <div className="menu-row">
                        {/* Informações da agência e conta */}
                        <div className="menu-item">
                            <p>Agência</p>
                            <h2>0007</h2>
                        </div>
                        <div className="menu-item">
                            <p>Conta</p>
                            <h2>01234-5</h2>
                        </div>
                        {/* Informações de login ou mensagem de carregamento */}
                        <div className="login-info">
                            {userData ? (
                                <>
                                    <h2>{userData.nome}</h2>
                                    <p>Sair</p>
                                </>
                            ) : (
                                <p>Carregando...</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Seção de conteúdo */}
                <div className="content">
                    {/* Lado esquerdo com informações de saldo e cartão de crédito */}
                    <div className="left">
                        <div className="saldo">
                            {/* {userSaldo ? (
                                <>
                                    <p>Saldo atual</p>
                                    <h1>{userSaldo.saldo}</h1>
                                </>
                            ) : (
                                <p>Carregando...</p>
                            )} */}
                        </div>
                        <div className="credito">
                            <p>Cartão de crédito</p>
                            <p id="limit">Limite disponível</p>
                            <h2>R$ 0,00</h2>
                        </div>
                    </div>

                    {/* Lado direito com informações sobre benefícios */}
                    <div className="right">
                        <h1 id="beneficios">Conheça seus benefícios Young</h1>
                        {/* Cards com informações sobre poupança, investimentos, movimentações e seguro */}
                        <div className="cards">
                            {/* ... (código dos cards) ... */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Componente de rodapé */}
            <Footer />
        </div>
    );
}

export default Inicial;

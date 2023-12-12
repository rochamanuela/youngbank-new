// Importa React e hooks necessários do React, estilos, componente Footer, Link para navegação e axiosInstance para fazer requisições HTTP.
import React, { useEffect, useState } from "react";
import "../components/styles/inicial.style.css";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import axiosInstance from "../services/axiosInstance";

// Define o componente funcional Inicial
function Inicial() {
    // Declaração de um estado para armazenar os dados do usuário
    const [userData, setUserData] = useState(null);
    // Declaração de um estado para armazenar os dados da conta do usuário
    const [userSaldo, setUserSaldo] = useState(null);

    // Efeito colateral que roda após a montagem do componente
    useEffect(() => {
        // Carrega os dados do usuário ao montar o componente
        const token = 'feaa60e25e23f21eccbcd07b3e3528a3884f9e1b';
        if (token.trim() !== '') {
            loadUserData(token);
        }

        if (token.trim() !== '') {
            loadSaldo(token);
        }
    }, []);

    // Função assíncrona para carregar os dados do usuário
    const loadUserData = async (token) => {
        try {
            // Faz uma requisição GET usando axiosInstance para obter dados do usuário
            const response = await axiosInstance.get(
                'cliente_pf/',
                {
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                }
            );
            console.log(response.data);

            // Verifica se a resposta contém dados
            if (Array.isArray(response.data) && response.data.length > 0) {
                console.log(response.data[0].nome);
                setUserData(response.data[0]); // Atualiza o estado com os dados do usuário
            } else {
                console.error('Dados do usuário não encontrados na resposta ou nome é nulo ou vazio.');
            }
        } catch (error) {
            // Trata erros de requisição
            console.error("Erro ao processar a solicitação:", error);
        }
    };

    // Função assíncrona para carregar os dados da conta do usuário
    const loadSaldo = async (token) => {
        try {
            // Faz uma requisição GET usando axiosInstance para obter dados da conta
            const response = await axiosInstance.get(
                'conta/',
                {
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                }
            );
            console.log(response.data);

            // Verifica se a resposta contém dados
            if (Array.isArray(response.data) && response.data.length > 0) {
                console.log(response.data[0].saldo);
                setUserSaldo(response.data[0]); // Atualiza o estado com os dados da conta
            } else {
                console.error('Dados da conta não encontrados na resposta ou saldo é nulo ou vazio.');
            }
        } catch (error) {
            // Trata erros de requisição
            console.error("Erro ao processar a solicitação:", error);
        }
    };

    // Renderiza o componente JSX
    return (
        <div>
            <div className="main">
                {/* Seção do menu superior */}
                <div className="menu-top">
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
                                // Se os dados do usuário não estiverem disponíveis
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
                            <p>Saldo atual</p>
                            {userSaldo ? (
                                <h1>R$ {userSaldo.saldo}</h1>
                            ) : (
                                // Se os dados da conta não estiverem disponíveis
                                <h1>Carregando...</h1>
                            )}
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
                            {/* Card 1 */}
                            <div className="card">
                                <div className="img-1"></div>
                                <h2>Poupança</h2>
                                <p>No Young Bank, oferecemos contas de poupança com taxas competitivas e opções
                                    flexíveis, incentivando você a crescer financeiramente com segurança, pois
                                    priorizamos o seu sucesso.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="card">
                                <div className="img-2"></div>
                                <h2>Investimentos</h2>
                                <p>Aqui no Young Bank, proporcionamos a você acesso a uma variedade de opções de
                                    investimento, permitindo que você maximize seus ganhos com portfólios diversificados
                                    e assessoria especializada para alcançar seus objetivos financeiros.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="card">
                                <div className="img-3"></div>
                                <h2>Movimentações</h2>
                                <p>Nosso compromisso no Young Bank é tornar a movimentação financeira ágil e eficiente
                                    para você. Seja por meio de aplicativos móveis intuitivos ou em nossas agências
                                    físicas, estamos focados em oferecer a você facilidade no gerenciamento das suas
                                    finanças.</p>
                            </div>
                            {/* Card 4 */}
                            <div className="card">
                                <div className="img-4"></div>
                                <h2>Seguro</h2>
                                <p>Aqui no Young Bank, garantimos a sua tranquilidade financeira, proporcionando soluções
                                    abrangentes de seguro. Desde seguros de vida até coberturas para seus bens
                                    patrimoniais, estamos ao seu lado para proteger o que mais importa para você.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Componente de rodapé */}
            <Footer />
        </div>
    );
}

// Exporta o componente para ser utilizado em outros lugares
export default Inicial;

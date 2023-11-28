import React from "react";
import "../components/styles/inicial.style.css";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Inicial() {
    return (
        <div>
            <div className="main">
                <div className="menu-top">
                    <div className="menu-row">
                        <div className="logo"></div>
                        <p>O banco digital feito para <b>você :)</b></p>
                    </div>
                    <div className="menu-row">
                        <div className="menu-item">
                            <p>Agência</p>
                            <h2>0007</h2>
                        </div>
                        <div className="menu-item">
                            <p>Conta</p>
                            <h2>01234-5</h2>
                        </div>
                        <div className="login-info">
                            <h2>Manuela</h2>
                            <p>Sair</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="left">
                        <div className="saldo">
                            <p>Saldo atual</p>
                            <h1>R$ 1.300,00</h1>
                        </div>
                        <div className="credito">
                            <p>Cartão de crédito</p>
                            <p id="limit">Limite disponível</p>
                            <h2>R$ 250,00</h2>
                        </div>
                    </div>
                    <div className="right">
                        <h1 id="beneficios">Conheça seus benefícios Young</h1>
                        <div className="cards">
                            <div className="card">
                                <div className="img-1"></div>
                                <h2>Poupança</h2>
                                <p>No Young Bank, oferecemos contas de poupança com taxas competitivas e opções
                                    flexíveis, incentivando você a crescer financeiramente com segurança, pois
                                    priorizamos o seu sucesso.</p>
                            </div>
                            <div className="card">
                                <div className="img-2"></div>
                                <h2>Investimentos</h2>
                                <p>Aqui no Young Bank, proporcionamos a você acesso a uma variedade de opções de
                                    investimento, permitindo que você maximize seus ganhos com portfólios diversificados
                                    e assessoria especializada para alcançar seus objetivos financeiros.</p>
                            </div>
                            <div className="card">
                                <div className="img-3"></div>
                                <h2>Movimentações</h2>
                                <p>Nosso compromisso no Young Bank é tornar a movimentação financeira ágil e eficiente
                                    para você. Seja por meio de aplicativos móveis intuitivos ou em nossas agências
                                    físicas, estamos focados em oferecer a você facilidade no gerenciamento das suas
                                    finanças.</p>
                            </div>
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
            <Footer />
        </div>
    );
}

export default Inicial;
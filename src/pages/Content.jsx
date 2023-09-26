import React from "react"
import "../components/styles/content.style.css"
import app from '../assets/images/image-app-mockup.png'
import woman from '../assets/images/image-woman.png'

function Content() {
    return (
        <div>
            <div className="content-main">
                <div className="item item-1">
                    <div className="content-text-1">
                        <h1>Conta digital Young</h1>
                        <p>Rende mais que a poupança, sem taxa de
                            manutenção nem tarifas escondidas.</p>
                        <a href="">Saiba mais sobre o Young Bank</a>
                    </div>
                    <div className="app"></div>
                </div>
                <div className="item">
                    <div className="woman"></div>
                    <div className="content-text-2">
                        <h1>Envie e receba pagamentos em poucos segundos</h1>
                        <p>Use o Pix para fazer pagamentos e transferências
                            instantâneas a qualquer momento. Sem burocracia,
                            sem custo e sem enrolação, do jeitinho Young.</p>
                        <a href="">Conhecer o Pix Young</a>
                    </div>
                </div>
            </div>
            <div className="youngs">
                <div className="text-final">
                    <h1>O fim da complexidade</h1>
                    <p>Para quem entende que tecnologia e design são muito
                        melhores do que agências, papelada e filas intermináveis</p>
                </div>
            </div>
        </div>
    );
}

export default Content;
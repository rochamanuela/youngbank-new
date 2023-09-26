import React from "react";
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'
import { FaGooglePlay } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
// import { FaLinkedinIn } from 'react-icons/fa'
// import { FaYoutube } from 'react-icons/fa'
// import { BiLogoInstagramAlt } from 'react-icons/bi'
import "../components/styles/footer.style.css";


function Footer() {
  return (
    <div>
      <div>
        <footer>
          <div className="images">
            <div className="container-father">
              <div className="container">
                <h3>Siga o Young</h3>
                <div className="social-media">
                  <div className="child"><BiLogoFacebook className="icon"/></div>
                  <div className="child"><BiLogoLinkedin className="icon"/></div>
                  <div className="child"><BiLogoInstagramAlt className="icon"/></div>
                  <div className="child"><BiLogoTwitter className="icon"/></div>
                  <div className="child"><BiLogoYoutube className="icon"/></div>
                </div>
              </div>
              <div className="container">
                <h3>Baixe o nosso App</h3>
                <div className="apps">
                  <div className="child">
                    <FaGooglePlay className="icon"/>
                    <p>Google Play</p>
                  </div>
                  <div className="child">
                    <BsApple className="icon"/>
                    <p>App Store</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-white"></div>
          </div>
          <hr />
          <div className="links">
            <div className="links-1">
              <p>confira nossas vagas</p>
              <p>cotação do dólar</p>
              <p>tarifas</p>
              <p>segurança</p>
              <p>privacidade de dados</p>
              <p>política de privacidade</p>
              <p>canal de ética</p>
              <p>canal de ética</p>
              <p>política de segurança da informação</p>
              <p>política de segurança da informação para fornecedores</p>
            </div>
            <div className="links-2">
              <p>© 2023 Banco Young S.A. CNPJ: 00.000.000/0001-01</p>
              <p>Campinas | SP - Rua Pastor Cicero Canuto de Lima, 71 São Bernardo - Vila Rialto. CEP: 13036-210</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
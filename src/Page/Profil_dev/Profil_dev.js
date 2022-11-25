import React, { useState } from "react";
import Navigation from "../../Component/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Languages from "./Languages";

const Profil_dev = () => {
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  };

  return (
    <section>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className={` ${active ? "blur" : ""}`}>
        <Navigation></Navigation>
        <div className="global_profil_dev">
          <div className="bloc1_profil_dev">
            <div className="imgcontent">
              <img src="./Media/thibaut.jpg" alt="moi" />
              <h3>Senechal Thibaut</h3>
            </div>
            <div className="idcontent">
              <ul>
                <CopyToClipboard text="senechal.thibaut@hotmail.fr">
                  <li className="copyvalid" onClick={classToggle}>
                    senechal.thibaut@hotmail.fr
                  </li>
                </CopyToClipboard>
                <CopyToClipboard text="0770390083">
                  <li className="phone copyvalid" onClick={classToggle}>
                    07.70.39.00.83
                  </li>
                </CopyToClipboard>
                <CopyToClipboard text="bordeaux">
                  <li className="copyvalid" onClick={classToggle}>
                    Bordeaux
                  </li>
                </CopyToClipboard>
              </ul>
              <div className="Vcard"></div>
            </div>

            <div className="idsocial">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://codepen.io/Nerion1337"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-codepen" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="bloc2_profil_dev">
            <div className="bloc3_profil_dev">
              <Languages />
            </div>
            <div className="bloc4_profil_dev">
              <h3>Centre d'Interêt</h3>
              <ul>
                <li>Crypto-monnaie</li>
                <li>Investissement</li>
                <li>Jeux Video</li>
                <li>Sport</li>
                <li>Entrepreneurial</li>
                <li>Moto</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      <div className={`popuphome ${active ? "active" : ""}`}>
        <h2>Copié !</h2>
        <span className="copyvalid" onClick={classToggle}>
          ok
        </span>
      </div>
    </section>
  );
};

export default Profil_dev;

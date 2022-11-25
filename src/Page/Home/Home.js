import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NavLink } from "react-router-dom";
import Dark_Light from "../../Component/Dark_Light";
import Fond from "../../Component/Fond";

const Home = () => {
  //  POPUP
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  };

  //PARTIE WEB
  const [devweb, setDevweb] = useState(false);

  const devwebToggle = () => {
    setDevweb(!devweb);
  };

  //PARTIE COACH
  const [coach, setCoach] = useState(false);

  const coachToggle = () => {
    setCoach(!coach);
  };

  return (

    
    <section>
     
      <div className={`home ${active ? "blur" : ""}`}>
        <Fond></Fond> 
        <Dark_Light />
        {/* C O M P A R T I M E N T  
        -  
        E S P A C E*/}
        <div className="coach">
          <div className="bloc1">
            <div className={`boutonhomeanim btn2 ${coach ? "visible" : ""}`}>
              <NavLink exact to="/profil_coach">
                <h2 className="boutonhome">Profil</h2>
              </NavLink>
            </div>
            <i className={`barreHG ${coach ? "" : "barreG1"}`}></i>
          </div>

          <div className="bloc1">
            <div className={`boutonhomeanim btn1 ${coach ? "invisible" : ""}`}>
              <h2 className="boutonhome" onClick={coachToggle}>
                Coach Sportif
              </h2>
            </div>
            <i className={`barreCG ${coach ? "barreG1" : ""}`}></i>
          </div>

          <div className="bloc1">
            <div className={`boutonhomeanim btn2 ${coach ? "visible" : ""}`}>
              <NavLink exact to="/formule">
                <h2 className="boutonhome">Formule</h2>
              </NavLink>
            </div>
            <i className={`barreBG ${coach ? "" : "barreG1"}`}></i>
          </div>
        </div>
        {/* C O M P A R T I M E N T  
        -  
        E S P A C E*/}
        <div className="profil">
          <div className="box">
            <div className="content">
                     <h2>Contact</h2>

              <CopyToClipboard text="senechal.thibaut@hotmail.fr">
                <span className="copyvalid" onClick={classToggle}>
                  senechal.thibaut@hotmail.fr
                </span>
              </CopyToClipboard>

              <CopyToClipboard text="0770390083">
                <span className="copyvalid" onClick={classToggle}>
                  07.70.39.00.83
                </span>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        {/* C O M P A R T I M E N T  
        -  
        E S P A C E*/}
        <div className="devweb">
          <div className="bloc1">
            <div className={`boutonhomeanim btn2 ${devweb ? "visible" : ""}`}>
              <NavLink exact to="/profil_developper">
                <h2 className="boutonhome">Profil</h2>
              </NavLink>
            </div>
            <i className={`barreHD ${devweb ? "" : "barreG1"}`}></i>
          </div>

          <div className="bloc1">
            <div className={`boutonhomeanim btn1 ${devweb ? "invisible" : ""}`}>
              <h2 className="boutonhome" onClick={devwebToggle}>
                Développeur Web
              </h2>
            </div>
            <i className={`barreCD ${devweb ? "barreG1" : ""}`}></i>
          </div>

          <div className="bloc1">
            <div className={`boutonhomeanim btn2 ${devweb ? "visible" : ""}`}>
              <NavLink exact to="/portfolio">
                <h2 className="boutonhome">Portfolio</h2>
              </NavLink>
            </div>
            <i className={`barreBD ${devweb ? "" : "barreG1"}`}></i>
          </div>
        </div>
      </div>

      {/* C O M P A R T I M E N T  
      -  
      E S P A C E*/}
      <div className={`popuphome ${active ? "active" : ""}`}>
        <h2>Copié !</h2>
        <span className="copyvalid" onClick={classToggle}>
          ok
        </span>
       
      </div> 
      
    </section>
  );
};

export default Home;

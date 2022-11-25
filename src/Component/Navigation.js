import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dark_Light from "./Dark_Light";

const Navigation = () => {
  const [btnmenu, setBtnmenu] = useState(false);

  const menuToggle = () => {
    setBtnmenu(!btnmenu);
  };
  return (
    <nav>
      <button
        className={`btncontentmenu ${btnmenu ? "active" : ""}`}
        onClick={menuToggle}
      ></button>
      <aside className={`contentmenu ${btnmenu ? "active" : ""}`}>
        <div className="contentwrapper">
          <NavLink to="/home">
            <div className="logohome">
              <p>Home</p>
            </div>
          </NavLink>
          <div className="contentnavcoach">
            <h2>Coach</h2>
            <div className="contentmenucoach">
              <NavLink to="/profil_coach">
                <h3>Profil</h3>
              </NavLink>
              <br />
              <NavLink to="/formule">
                <h3>Formule</h3>
              </NavLink>
            </div>
          </div>
          <div className="contentnavdev">
            <h2>Developpeur</h2>
            <div className="contentmenudev">
              <NavLink to="/profil_developper">
                <h3>Profil</h3>
              </NavLink>
              <br />
              <NavLink to="/portfolio">
                <h3>Portfolio</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </aside>

      <header>
        <div className="wrapper">
          <div className="navcoach">
            <h2>Coach</h2>
            <div className="menucoach">
              <NavLink to="/profil_coach">
                <h3>Profil</h3>
              </NavLink>
              <br />
              <NavLink to="/formule">
                <h3>Formule</h3>
              </NavLink>
            </div>
          </div>

          <NavLink to="/home">
            <div className="logohome" title="Home">
              <p>Home</p>
            </div>
          </NavLink>

          <div className="navdev">
            <h2>Developpeur</h2>
            <div className="menudev">
              <NavLink to="/profil_developper">
                <h3>Profil</h3>
              </NavLink>
              <br />
              <NavLink to="/portfolio">
                <h3>Portfolio</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      <Dark_Light />
    </nav>
  );
};

export default Navigation;

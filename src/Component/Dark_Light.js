import React, { useState } from "react";

const Dark_Light = () => {
    const body = document.querySelector("body");

    const darklightToggle = () => {
      body.classList.toggle("modelight");
    };

  return (
    <div className="darklight" onClick={darklightToggle}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </div>
  );
};

export default Dark_Light;

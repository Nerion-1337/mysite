import React, { useState } from "react";

const Dark_Light = () => {
    const body = document.querySelector("body");

    const darklightToggle = () => {
      body.classList.toggle("modelight");
    };

  return (
    <div className="darklight" onClick={darklightToggle}>
    </div>
  );
};

export default Dark_Light;

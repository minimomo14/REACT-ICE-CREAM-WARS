import React, { useState } from "react";
import "./Styles.css";
import Ad from "./Ad";

function AdDesigner() {
  const [flavor, setFlavor] = useState("Choose a flavor");
  const [fontSize, setFontSize] = useState(20);
  const [theme, setTheme] = useState(false);
  //comment out darkTheme (ctlrl+K+C) undone (ctrl+K+U)
  // let darkTheme = "";
  // if (theme) {
  //   darkTheme = "dark";
  // }

  

  return (
    <div className="AdDesigner">
      <h2 className="AdDesigner_header">Ad Designer</h2>
        <section>
        <p>What to support</p>
        <div></div>

        <Ad flavor={flavor} fontSize={fontSize} theme={theme} />

        <button
          disabled={flavor === "Strawberry"}
          onClick={() => setFlavor((flavor) => (flavor = "Strawberry"))}
        >
          Strawberry
        </button>
        <button
          disabled={flavor === "Coconut Milk"}
          onClick={() => setFlavor((flavor) => (flavor = "Coconut Milk"))}
        >
          Coconut Milk
        </button>
        <button
          disabled={flavor === "Cookies and Cream"}
          onClick={() => setFlavor((flavor) => (flavor = "Cookies and Cream"))}
        >
          Cookies and Cream
        </button>
        <div></div>
      </section>

      <section className="ColorTheme ">
        <p>Color Theme:</p>
        <div></div>
        <button disabled={theme === false} onClick={() => setTheme(false)}>
          Light
        </button>
        :
        <button disabled={theme === true} onClick={() => setTheme(true)}>
          Dark
        </button>
        <div></div>
      </section>

      <section className="fontSize">
        <div></div>
        <p>Font Size</p>
        <div></div>
        <button onClick={() => setFontSize((size) => (size = fontSize + 1))}>Up</button> {fontSize}   
        <button onClick={() => setFontSize((size) => (size = fontSize - 1))}>Down</button>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default AdDesigner;

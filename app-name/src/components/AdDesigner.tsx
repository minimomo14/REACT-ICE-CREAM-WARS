import React, { useState } from "react";
import "./Styles.css";

function AdDesigner() {
  const [flavor, setFlavor] = useState("Choose a flavor");
  const [fontSize, setFontSize] = useState(20);
  const [theme, setTheme] = useState(false);
  let darkTheme = "";
  if (theme) {
    darkTheme = "dark";
  }

  const FontStyle = {
    fontSize: fontSize + "px",
  };

  return (
    <div className="AdDesigner">
      <h2 className="font-link">Ad Designer</h2>
      <div className={"AdContainer" + darkTheme}>
        <p>Vote For</p>
        <h3 style={FontStyle}>{flavor}</h3>
      </div>
      <br></br>
      <section>
        <p>What to support</p>
        <div></div>
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
        <button onClick={() => setFontSize((size) => (size = fontSize + 1))}>
          Up
        </button>
        <p>{fontSize}</p>
        <button onClick={() => setFontSize((size) => (size = fontSize - 1))}>
          Down
        </button>
        <div></div>
      </section>
    </div>
  );
}

export default AdDesigner;

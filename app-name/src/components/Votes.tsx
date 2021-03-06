import { count } from "console";
import React, { useEffect, useState } from "react";
import { PollingWatchKind, setConstantValue } from "typescript";
import AdDesigner from "./AdDesigner";
import "./Styles.css";

function Votes() {
  const [vote, setVote] = useState(0);
  const [strawberryVote, setStrawberryVote] = useState(0);
  const [coconutMilkVote, setCoconutMilk] = useState(0);
  const [cookiesAndCreamVote, setCookiesAndCream] = useState(0);
  let totalVote =
    ((strawberryVote + coconutMilkVote + cookiesAndCreamVote) / 100) * 100;
  let strawberryPercentage = (strawberryVote / totalVote) * 100;
  let coconutMilkPercentage = (coconutMilkVote / totalVote) * 100;
  let cookiesAndCreamPercentage = (cookiesAndCreamVote / totalVote) * 100;

  const [width, setWidth] = useState(0);

  const StrawberryStyle = {
    height: "25px",
    borderRadius: "5px",
    border: "solid, white",
    width: strawberryPercentage + "px",
    backgroundColor: "pink",
  };

  const CoconutMilkStyle = {
    height: "25px",
    borderRadius: "5px",
    border: "solid, white",
    width: coconutMilkPercentage + "px",
    backgroundColor: "powderBlue",
  };

  const CookiesAndCreamStyle = {
    height: "25px",
    borderRadius: "5px",
    border: "solid, white",
    width: cookiesAndCreamPercentage + "px",
    backgroundColor: "bisque",
  };

  return (
    <div className="Votes">
      <div></div>
      <h2 className="FontStyle">Vote Here</h2>
      <button onClick={() => setStrawberryVote(strawberryVote + 1)}>
        Strawberry
      </button>
      <button onClick={() => setCoconutMilk(coconutMilkVote + 1)}>
        Coconut Milk
      </button>
      <button onClick={() => setCookiesAndCream(cookiesAndCreamVote + 1)}>
        Cookies and Cream
      </button>

      {totalVote === 0 && <div>No vote yet.</div>}

      <div className="Strawberry" style={StrawberryStyle}></div>
      {strawberryVote > 0 && (
        <p>
          Strawberry: {strawberryVote} votes | {strawberryPercentage.toFixed()}%
        </p>
      )}

      <div className="CoconutMilk" style={CoconutMilkStyle}></div>
      {coconutMilkVote > 0 && (
        <p>
          Coconut Milk: {coconutMilkVote} votes | {coconutMilkPercentage.toFixed()}%
        </p>
      )}

      <div className="CookiesAndCream" style={CookiesAndCreamStyle}></div>
      {cookiesAndCreamVote > 0 && (
        <p>
          Cookies and Cream: {cookiesAndCreamVote} votes |{" "}
          {cookiesAndCreamPercentage.toFixed()}%
        </p>
      )}
    </div>
  );
}

export default Votes;

import React from "react";
import "./Styles.css";

interface Prop {
  user: string;
}

function Header({ user }: Prop) {
  return (
    <div className="font-link">
      <header>
        <h1>Ice Cream Wars</h1>
        <span>Welcome: {user}</span>
      </header>
    </div>
  );
}

export default Header;

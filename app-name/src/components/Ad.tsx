import React from "react";

interface AdProps {
    flavor: string;
    fontSize: number;
    theme: boolean;
}

function Ad({flavor,fontSize,theme}: AdProps) {

    const FontStyle = {
        fontSize: fontSize + "px",
      };

    let darkTheme = "";
    if (theme) {
        darkTheme = "dark";
    }

    return(
    <div className={"Ad" }>
        <div className={"AdContainer"+ darkTheme}>
        <p>Vote For</p>
        <h3 className="FontStyle" style={FontStyle}>{flavor}</h3>
      </div>
      <br></br> 
    </div>
    );
};

export default Ad;
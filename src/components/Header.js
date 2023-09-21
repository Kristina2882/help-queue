import React from "react";
import ticketImage from "./../img/fixer.png";

function Header() {
    return (
        <React.Fragment>
        <h1>Help Queue</h1>
        <img src={ticketImage} alt="fix"/>
        </React.Fragment>
    );
}

export default Header;
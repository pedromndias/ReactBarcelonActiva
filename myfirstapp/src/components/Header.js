import React, { Component } from "react";
import logo from "../img/qx7jYSYm_400x400.jpg";
import Salutactio from "./Salutacio";
import "./Header.css";

class Header extends Component {
    render() {
        let userName = "Joan";
        return(
            <>
                <h1 className="salutacio"><img src={logo} height="50px" alt="logo" />El teu portal de montanya. <Salutactio nick={userName} /></h1>
            </>
        )
    }
}

export default Header;


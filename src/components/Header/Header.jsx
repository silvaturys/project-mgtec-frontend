import React from "react";
import Navbar from "../NavBar/NavBar";
import logo from "../../images/logo2.svg"

function Header() {

  return (
    <>
    <header className="header">
        <img 
        alt="logo mgtec"
        className="header__image" 
        src={logo}/>
        <Navbar></Navbar>
    </header>
    
    </>
  );

}
export default Header;
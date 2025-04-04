import React from "react";
import QuemSomos from "../QuemSomos/QuemSomos";
import Footer from "../Footer/Footer";

function Home() {

  return (
    <>
    <section className="home" id="home">
      <h1 className="home__title">A tecnologia que sua casa precisa !</h1>
      <p className="home__paragraph_1">Soluções completas em tecnologia para sua casa do futuro.</p>
      <p className="home__paragraph_2" >Criamos ambientes inteligentes, conectados e personalizados para você.</p>
      <a href="#contato" className="home__botton">Conheça a MGTEC</a>
    </section>
    <QuemSomos></QuemSomos>
    <Footer></Footer>
    </>
  );

}
export default Home;
import React from "react";
import foto from "../../images/fotodaequipe.jpg"
function QuemSomos() {
  return (
    <section id="quem-somos" className="QuemSomos">
        <h2 className="QuemSomos__title">Quem Somos</h2>
        <div className="QuemSomos__container">
            <h3 className="QuemSomos__subtitle"> MGTEC Soluções Tecnológicas</h3>
            <p className="QuemSomos__about">A MGTEC Soluções é uma empresa 
                especializada em tecnologia para residências trazendo conforto, 
                inovação e integração com a arquitetura. Há 10 anos, atuamos na 
                Grande Florianópolis, oferecendo soluções personalizadas para 
                centenas de lares. Somos uma sociedade entre pai e 
                filho (Marcos e Gustavo), unindo experiência e inovação para 
                transformar casas em espaços inteligentes, conectados e funcionais.
                Nosso foco é tecnologia que facilita o dia a dia, com projetos 
                pensados ​​para cada cliente.
            </p>
            <img
            alt="foto da equipe da empresa mgtec"
            className="QuemSomos__image" 
            src={foto}/>
        </div>
    </section>
    );
    }

export default QuemSomos;
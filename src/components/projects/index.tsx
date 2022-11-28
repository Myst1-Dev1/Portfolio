import './styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const mysferic = require('../../assets/images/mysferic.png');
const mysburguer = require('../../assets/images/mbu.png');
const myspet = require('../../assets/images/myspet.png');
const coffyst = require('../../assets/images/cofist.png');
const managementDashboard = require('../../assets/images/management-dashboard.png');
const imc = require('../../assets/images/imc.png');
const pokedex = require('../../assets/images/pkdex.png');
const drmyst1 = require('../../assets/images/drmyst1.png');
const lojaDeNatal = require('../../assets/images/lojadenatal.png');
const digidex = require('../../assets/images/digidex.png');
const netflixClone = require('../../assets/images/mysflix.png');

export function Projects() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <div className="container-fluid projects-page" id='projetos' data-aos="fade-right">
            <div className='container'>
                <h2>Projetos</h2>
                <Carousel 
                    className='mt-5 container-project' 
                    responsive={responsive}
                    showDots={true}
                    centerMode={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    arrows={true}
                >
                    <div className='project'>
                        <div className="img-container">
                            <img src={mysferic} alt="mysferic" />
                        </div>
                        <h3>Mysferic</h3>
                        <p>Loja de perifericos com algumas bases na loja da Kabum</p>
                        <a 
                            href="https://myst1-dev1.github.io/MysFeric/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>
                    
                    <div className='project'>
                        <div className="img-container">
                            <img src={mysburguer} alt="mysburguer" />
                        </div>
                        <h3>MysBurguer</h3>
                        <p>Hamburgueria feita como primeira prática em bootstrap</p>
                        <a 
                            href="https://myst1-dev1.github.io/Mysburguer/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>
                    
                    <div className='project'>
                        <div className="img-container">
                            <img src={myspet} alt="myspet" />
                        </div>
                        <h3>MysPet</h3>
                        <p>Loja de PetShop simples com HTML CSS JAVACRIPT</p>
                        <a
                            href="https://myst1-dev1.github.io/MysPet/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={coffyst} alt="coffyst" />
                        </div>
                        <h3>Coffyst</h3>
                        <p>Site de cafeteria para praticar o Web Design</p>
                        <a 
                            href="https://myst1-dev1.github.io/Coffyst/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={managementDashboard} alt="managementDashboard" />
                        </div>
                        <h3>Management Dashboard</h3>
                        <p>Layout responsivo de um sistema de gerenciamento de projetos</p>
                        <a 
                            href="https://myst1-dev1.github.io/Management-Dashboard/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={imc} alt="imc" />
                        </div>
                        <h3>IMC</h3>
                        <p>Calculo de Indice de Massa corporal com javascript</p>
                        <a 
                            href="https://myst1-dev1.github.io/IMC/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={pokedex} alt="pokedex" />
                        </div>
                        <h3>Pokedex</h3>
                        <p>Primeira pratica com react e consumo de API</p>
                        <a 
                            href="https://myst1-dev1.github.io/pkdex/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={drmyst1} alt="drmyst1" />
                        </div>
                        <h3>Dr Myst1</h3>
                        <p>Site sobre a Covid-19, baseado no teste de uma empresa</p>
                        <a 
                            href="https://myst1-dev1.github.io/Dr-Myst1/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={lojaDeNatal} alt="lojaDeNatal" />
                        </div>
                        <h3>Loja de natal</h3>
                        <p>As vendas de natal começaram, feliz natal</p>
                        <a 
                            href="https://myst1-dev1.github.io/Myst-Noel/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={digidex} alt="digidex" />
                        </div>
                        <h3>DigiDex</h3>
                        <p>Site consumindo API com filtro e paginação</p>
                        <a 
                            href="https://myst1-dev1.github.io/DigiDex/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                    <div className='project'>
                        <div className="img-container">
                            <img src={netflixClone} alt="netflix-clone" />
                        </div>
                        <h3>Netflix Clone</h3>
                        <p>Clone do netflix para aprimorar o aprendizado em react</p>
                        <a 
                            href="https://myst1-dev1.github.io/MysFlix/" 
                            target="_blank" 
                            rel="noreferrer">
                            <button>Saiba mais</button>
                        </a>
                    </div>

                </Carousel>    
            </div>
        </div>
    )
}
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import './styles.scss';
const myst = require('../../assets/images/myst.jpg');

export function About() {
    return(
        <div className='container about-page' id='sobre' data-aos="fade-right">
            <h2>Sobre</h2>
            <div className='mt-5 about-content'>
                <div className="img-subtitles-container">
                    <div className='img-container'>
                        <img src={myst} alt="myst1" />
                    </div>
                    <div className='about-subtitles'>
                        <p>
                            João Victor " Myst1 " é um estudante de análise e desenvolvimento de sistemas de 20 anos.
                            Apaixonado por animes,jogos e tecnologia, ele deseja se tornar um programador 
                            sênior dotado de conhecimento.
                        </p>
                        <div className="about-icons">
                        <a target="_blank" rel="noreferrer"  href="https://github.com/Myst1-Dev1"><FaGithub/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/myst1-dev/"><FaLinkedin /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/myst1_dev/"><FaInstagram /></a>
                        </div>
                        <button className="btn1 mt-2">
                        <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.canva.com/design/DAE2ZI86tZU/FtGwpZgbUYorBDoE4j76sQ/view?utm_content=DAE2ZI86tZU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                            Download CV
                        </a>
                        </button>
                    </div>
                </div>

                <div className="cube">
                    <div>
                        <span className="face1"></span>
                        <span className="face2"></span>
                        <span className="face3"></span>
                        <span className="face4"></span>
                        <span className="face5"></span>
                        <span className="face6"></span>
                    </div>
                </div>
            </div>
        </div>
    )

}
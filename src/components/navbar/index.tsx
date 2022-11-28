import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase, faDesktop, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
    return(
        <nav className='nav-bar'>
            <a href="#inicio"><FontAwesomeIcon className='i' icon={faHome}/><span>Início</span></a>
            <a href="#sobre"><FontAwesomeIcon className='i' icon={faUser}/><span>Sobre</span></a>
            <a href="#habilidades"><FontAwesomeIcon className='i' icon={faBook}/><span>Habilidades</span></a>
            <a href="#servicos"><FontAwesomeIcon className='i' icon={faDesktop}/><span>Serviços</span></a>
            <a href="#projetos"><FontAwesomeIcon className='i' icon={faBriefcase}/><span>Projetos</span></a>
            <a href="#contato"><FontAwesomeIcon className='i' icon={faEnvelope}/><span>Contato</span></a>  
        </nav>
    )
}
import './styles.scss';
import { FaBook, FaBriefcase, FaDesktop, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';

export function Navbar() {
    return(
        <nav className='nav-bar'>
            <a href="#inicio"><FaHome className='i' /><span>Início</span></a>
            <a href="#sobre"><FaUser className='i' /><span>Sobre</span></a>
            <a href="#habilidades"><FaBook className='i' /><span>Habilidades</span></a>
            <a href="#servicos"><FaDesktop className='i' /><span>Serviços</span></a>
            <a href="#projetos"><FaBriefcase className='i' /><span>Projetos</span></a>
            <a href="#contato"><FaEnvelope className='i' /><span>Contato</span></a>  
        </nav>
    )
}
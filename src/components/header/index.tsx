import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../animatedLetters';
import { 
    FaAngular, 
    FaCss3,
    FaGitAlt,
    FaHtml5, 
    FaJsSquare, 
    FaReact } 
    from 'react-icons/fa';
import './styles.scss';


export function Header() {
    const [letterClass, setLetterCLass] = useState('text-animate');
    const nameArray = ['','M', 'y', 's', 't', '1'];

    useEffect(() =>{
        setTimeout(() => {
            setLetterCLass('text-animate-hover');
        }, 4000);
    }, [])


    return(
        <header className='container-fluid' id='inicio'>
            <div className='banner-flex'>
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>O</span>   
                    <span className={`${letterClass} _12`}>lá</span>   
                    <br />
                    <span className={`${letterClass} _13`}>Eu</span>
                    <span className={`${letterClass} _14`}>&nbsp;sou</span>
                    <span className={`${letterClass} _15`}>&nbsp;o</span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={16} />
                        <br />
                    <AnimatedLetters letterClass={letterClass}
                        idx={22} strArray={undefined} />
                    </h1>
                    <h2>Desenvolvedor Fullstack</h2>
                    <a href="#contato">Entre Em Contato</a>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FaAngular color="DD0031" />
                        </div>
                        <div className='face2'>
                            <FaHtml5 color="F06529" />
                        </div>
                        <div className='face3'>
                            <FaCss3 color="28A4D9" />
                        </div>
                        <div className='face4'>
                            <FaReact color="5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FaJsSquare color="EFD81D" />
                        </div>
                        <div className='face6'>
                            <FaGitAlt color="EC4" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
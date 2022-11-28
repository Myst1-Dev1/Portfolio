import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../animatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngular, 
    faCss3,
    faGitAlt,
    faHtml5, 
    faJsSquare, 
    faReact } 
    from '@fortawesome/free-brands-svg-icons';
import './styles.scss';


export function Header() {
    const [letterClass, setLetterCLass] = useState('text-animate');
    const nameArray = ['','M', 'y', 's', 't', '1'];
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

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
                    strArray={jobArray}
                    idx={22} />
                    </h1>
                    <h2>Fullstack Developer</h2>
                    <a href="#contato">Entre Em Contato</a>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="EC4" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
import './styles.scss';
const html = require('../../assets/images/html.png');
const css = require('../../assets/images/css.png');
const javascript = require('../../assets/images/js.png');
const react = require('../../assets/images/react.png');
const sass = require('../../assets/images/sass.png');
const bootstrap = require('../../assets/images/bootstrap.png');
const node = require('../../assets/images/node.png');
const postgresql = require('../../assets/images/postgres.png');
const figma = require('../../assets/images/figmaa.png');
const jquery = require('../../assets/images/jqueryicon.png');

export function Skills() {
    return(
        <div className='container skills-page' id='habilidades' data-aos="fade-right">
            <h2>Habilidades</h2>

            <div className='mt-5 skills-container'>
                <div className='skill'>
                        <img src={html} alt='html'/>
                        <h2>HTML</h2>
                        <div className='progress-bar'>
                            <div style={{width:"90%"}} className='progress-skill'></div>
                        </div>
                        <p>90%</p>
                </div>

                <div className='skill'>
                        <img src={css} alt='css'/>
                        <h2>CSS</h2>
                        <div className='progress-bar'>
                            <div style={{width:"80%"}} className='progress-skill'></div>
                        </div>
                        <p>80%</p>
                </div>

                <div className='skill'>
                        <img src={javascript} alt='javascript'/>
                        <h2>JAVACRIPT</h2>
                        <div className='progress-bar'>
                            <div style={{width:"50%"}} className='progress-skill'></div>
                        </div>
                        <p>50%</p>
                </div>

                <div className='skill'>
                        <img src={sass} alt='sass'/>
                        <h2>SASS</h2>
                        <div className='progress-bar'>
                            <div style={{width:"50%"}} className='progress-skill'></div>
                        </div>
                        <p>50%</p>
                    </div>

                    <div className='skill'>
                        <img src={bootstrap} alt='bootstrap'/>
                        <h2>BOOTSTRAP</h2>
                        <div className='progress-bar'>
                            <div style={{width:"60%"}} className='progress-skill'></div>
                        </div>
                        <p>60%</p>
                    </div>

                    <div className='skill'>
                        <img src={react} alt='react'/>
                        <h2>REACT</h2>
                        <div className='progress-bar'>
                            <div style={{width:"40%"}} className='progress-skill'></div>
                        </div>
                        <p>40%</p>
                    </div>

                    <div className='skill'>
                        <img src={node} alt='node'/>
                        <h2>NODE</h2>
                        <div className='progress-bar'>
                            <div style={{width:"30%"}} className='progress-skill'></div>
                        </div>
                        <p>30%</p>
                    </div>

                    <div className='skill'>
                        <img src={postgresql} alt='postgres'/>
                        <h2>POSTGRESQL</h2>
                        <div className='progress-bar'>
                            <div style={{width:"30%"}} className='progress-skill'></div>
                        </div>
                        <p>30%</p>
                    </div>

                    <div className='skill'>
                        <img src={figma} alt='figma'/>
                        <h2>FIGMA</h2>
                        <div className='progress-bar'>
                            <div style={{width:"50%"}} className='progress-skill'></div>
                        </div>
                        <p>50%</p>
                    </div>

                    <div className='skill'>
                        <img src={jquery} alt='jquery'/>
                        <h2>JQUERY</h2>
                        <div className='progress-bar'>
                            <div style={{width:"40%"}} className='progress-skill'></div>
                        </div>
                        <p>40%</p>
                    </div>   
            </div>
        </div>
    )
}
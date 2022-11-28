import './styles.scss';
const webDesign = require('../../assets/images/web-developer.jpg')
const mobileDeveloper = require('../../assets/images/mobile-developer.jpg')
const gameDeveloper = require('../../assets/images/game-developer.jpg')

export function Services() {
    return(
        <div className='container mt-5 services-page' id='servicos' data-aos="fade-right">
            <h2>Serviços</h2>
            <p>Saiba um pouco sobre o meu trabalho e sobre os meus planos para o futuro</p>
            <div className='service-container'>
                <div className='service'>
                    <div className="img-container">
                        <img src={webDesign} alt="webDesign" />
                    </div>
                    <h3>Web Developer</h3>
                    <p className='p-2'>Desenvolvimento e manuntenção de sites e sistemas para web</p>
                </div>

                <div className='service'>
                    <div className="img-container">
                        <img src={mobileDeveloper} alt="mobileDeveloper" />
                    </div>
                    <h3>Mobile Developer</h3>
                    <p className='p-2'>Pretendo futuramente desenvolver aplicativos para android</p>
                </div>

                <div className='service'>
                    <div className="img-container">
                        <img src={gameDeveloper} alt="gameDeveloper" />
                    </div>
                    <h3>Game Developer</h3>
                    <p className='p-2'>Tenho ideias de projetos para futuramente desenvolver jogos</p>
                </div>
            </div>
        </div>
    )
}
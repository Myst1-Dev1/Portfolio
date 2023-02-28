import './styles.scss';
import projects from '../../assets/data/projectsData';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Projects() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    return(
        <div className="container-fluid projects-page" id='projetos' data-aos="fade-right">
            <div className='container'>
                <h2>Projetos</h2>
                <Carousel 
                    className='mt-5 container-project' 
                    responsive={responsive}
                    draggable={false}
                    showDots={true}
                    centerMode={false}
                    arrows={true}
                >
                    {projects.map(prjt => {
                        return (
                        <div key={prjt.id} className='project'>
                            <div className="img-container">
                                <img src={prjt.image} alt="mysferic" />
                            </div>
                            <h3>{prjt.name}</h3>
                            <a 
                                href={prjt.link} 
                                target="_blank" 
                                rel="noreferrer">
                                    Ver Projeto
                            </a>
                        </div>
                        )
                    })}
                </Carousel>    
            </div>
        </div>
    )
}
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';


export function Contact() {
    function enviarEmail(e:any) {
        e.preventDefault();

    emailjs.sendForm('service_88ls40o', 'template_qhba9q9', e.target, '7ywCWQ6iuPOTnxXC_')
      .then((result) => {
          alert('Mensagem enviada com sucesso !');
      }, (error) => {
          alert('Ocorreu um erro ao enviar a mensagem !');
      });
      e.target.reset();
    }


    return (
        <div className='container contact-page' id='contato' data-aos="fade-right">
            <h2>Contato</h2>
            <div className='d-flex flexContact'>
                <div className='info-container'>
                    <div className='contact-icons-box'>
                        <div className='box-contact'>
                            <FontAwesomeIcon className='i' icon={faMap} />
                            <div className='contact-info'>
                                <h3>Endereço:</h3>
                                <p>Brasil, Rio de Janeiro</p>
                            </div>
                        </div>

                        <div className='box-contact'>
                            <FontAwesomeIcon className='i' icon={faEnvelope} />
                            <div className='contact-info'>
                                <h3>E-mail:</h3>
                                <p>danteopzz@hotmail.com</p>
                            </div>
                        </div>

                        <div className='box-contact'>
                            <FontAwesomeIcon className='i' icon={faPhone} />
                            <div className='contact-info'>
                                <h3>Número:</h3>
                                <p>+55 021964757806</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <form onSubmit={enviarEmail}>
                        <div className="inputBox">
                            <input type="text" required placeholder='Nome' name='nome'/>
                            <input type="number" required placeholder='Número' name="numero"/>
                        </div>
                        <div className="inputBox">
                            <input type="email" required placeholder='E-mail' name='email'/>
                            <input type="text" required placeholder='Assunto' name="assunto"/>
                        </div>
                        <textarea name="mensagem" placeholder='Mensagem'></textarea>
                        <div className='d-flex justify-content-center align-items-center'>
                            <input type="submit" value="Enviar" className='btn1'/>
                        </div>
                    </form>

            </div>
        </div>
    )
}
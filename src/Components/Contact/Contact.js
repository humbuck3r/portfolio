import logo from '../../Img/in.png'
import logogit from '../../Img/GitHub-Mark-120px-plus.png'
import logogmail from '../../Img/gmail.png'

const Social = (props) =>{
    return(
        <div>
            <a alt="" href={props.href}><img alt="" src={props.src} className="iconscontact"></img></a>
        </div>
    )
}


const Contact = () =>{
    return (
      <>
        <h1 className="tittle" id="Contact">Contact me </h1>
        <div className="social">
          <Social
            src={logo}
            href="https://www.linkedin.com/in/ezequiel-montero-up/"
          />
          <Social src={logogit} href="https://github.com/humbuck3r" />
          <Social src={logogmail} href="mailto:sr.ska89@gmail.com" />
        </div>
      </>
    );
}


export default Contact;
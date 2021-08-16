import img from '../../Img/logo-fondo-2.png'
import nube from '../../Img/nubes.png'
import calc from '../../Img/calculator.png'
import astro from '../../Img/amigos-2024747_1280.png'
import suerte from '../../Img/suerte.png'

const Card = (props) => {
    return (
      <a href={props.href} className="projectlink">
        <div className="card">
          <h1>{props.name}</h1>
          <img alt="" src={props.src} className="project-img"></img>
        </div>
      </a>
    );
}


const Works = () => {
    return (
      <>
        <div className="tittle" id="Projects">
          <h1>Projects</h1>
        </div>
        <div className="cards">
          <Card
            name="Calculator"
            src={calc}
            href="https://ezecalculator.netlify.app/"
          />
          <Card
            name="Florearte"
            src={img}
            href="https://florearteceramica.web.app/"
          />
          <Card
            name="Astrologia"
            src={astro}
            href="https://astrologiayenergia.com.ar/"
          />
          <Card
            name="Wheaterapp"
            src={nube}
            txt="hola"
            href="https://ezewheaterapp.netlify.app"
          />
          <Card
            name="Appsorteo"
            src={suerte}
            txt="hola"
            href="https://app-sorteo.netlify.app/"
          />
        </div>
      </>
    );
}



export default Works;
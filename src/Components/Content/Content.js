import "./content.scss";
import video from '../../Img/Network - 12716.mp4'


const Content = () => {
    return (
      <div className="content">
        <div className="cover-container">
          <video className="video" src={video} autoPlay loop muted />
          <div className="flextext">
            <h1 className="msj">Hi, I'm Ezequiel</h1>
            <h2 className="msj2">junior frontend developer</h2>
          </div>
        </div>

        <div className="wave"></div>
      </div>
    );
}


export default Content;
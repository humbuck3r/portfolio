import css from '../../Img/css.png'
import html from '../../Img/html-5.png'
import js from '../../Img/javascript.png'
import git from '../../Img/GitHub-Mark-120px-plus.png'
import xd from '../../Img/adobe-xd.png'
import bs from '../../Img/bootstrap-logo.png'
import ss from '../../Img/sass.png'
import rct from '../../Img/react.png'
import fb from '../../Img/logo-vertical.png'

const Item = (props) =>{
    return(
        <img alt="" src={props.src} className="icons"></img>
    )
}


const Skills = () =>{
    return (
      <><div className="skillscontainer">
        <h1 className="tittle" id="Skills">Skills & tools</h1>
        <div className="skills">
          <Item src={html} />
          <Item src={css} />
          <Item src={js} />
          <Item src={rct} />
          <Item src={bs} />
          <Item src={fb} />
          <Item src={git} />
          <Item src={xd} />
          <Item src={ss} />
        </div>
        </div>
        
      </>
    );
}



export default Skills;
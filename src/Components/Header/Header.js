import React from 'react';


const Btns = (props) => {
  return(
    <div className="navs"><a href={props.href}>{props.label}</a></div>
  )
}




const Header2 = () => {
    return (
      <header>
        <div className="navbar">
          <div className="navflex">
            <h1 className="logo">
              <span className="letter">E</span>zequiel
            </h1>
            <div className="navbtn">
              <ul className="navul">
                <Btns label="Home" href="#" />
                <Btns label="Projects" href="#Projects" />
                <Btns label="Skills" href="#Skills" />
                <Btns label="About" href="#About" />
                <Btns label="Contact" href="#Contact" />
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
}



export default Header2;
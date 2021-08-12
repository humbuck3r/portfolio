import React from 'react';
import { Container } from 'react-bootstrap';
import perilla from '../../Img/perilla final.png'



const Pedal = (props) => {
    return (
      <div>
        <div className="rectfooter">
          
        </div>
      </div>
    );
}



const Footer = () => {
    return (
      <footer className="footer">
        <Container className="container-fluid">
          <div className="pedals">
            <Pedal />
            
          </div>
        </Container>
      </footer>
    );
}

export default Footer;
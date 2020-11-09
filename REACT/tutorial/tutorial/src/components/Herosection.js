import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';
import video from './Videos/video-2.mp4';

function Herosection() {
    return (
      <div ClassName="hero-container">
        <video autoPlay muted loop>
          <source src= {video} type="video/mp4" />
        </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            {/* onClick= { console.log('hey')} */}
            Watch NOW <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    );
}

export default Herosection;

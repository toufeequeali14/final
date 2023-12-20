import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pic from '../assets/images/MyPhoto.jpg';
import bt1 from '../assets/images/bt1.png';
import bt2 from '../assets/images/bt2.png';
import bt3 from '../assets/images/bt3.png';
import bt4 from '../assets/images/bt4.png';
import bt5 from '../assets/images/bt5.png';
import bt6 from '../assets/images/bt6.png';
import bt7 from '../assets/images/bt7.png';
import bck from '../assets/images/backimg.png';
import rct from '../assets/images/Rectangle 51.png';

import strtbtn from '../assets/images/Group 38.png';

import bck2 from '../assets/images/Mask group.png';


const HeroSection = () => {
  return (
   
   
    <div className='container hero-section-margin' style={{backgroundImage: `url(${bck})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      
      <div className='row'>
        <div className='col col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between'>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={bt1} alt='Profile' style={{width: '40px', height:'40'}}></img></Button>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent', alignSelf: 'start'}}><img src={bt2} alt='Profile' style={{width: '40px', height:'40'}}></img></Button>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={bt3} alt='Profile' style={{width: '40px, height:40'}}></img></Button>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={bt4} alt='Profile' style={{width: '40px', height:'40'}}></img></Button>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={bt5} alt='Profile' style={{width: '40px', height:'40'}}></img></Button>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={bt6} alt='Profile' style={{width: '40px', height:'40'}}></img></Button>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={bt7} alt='Profile' style={{width: '40px', height:'40'}}></img></Button>
        </div>
      </div>



      <div className='row'>
        <div className='col col-sm-12 col-md-6 col-lg-6'>
          <h2>Create your own Web3<br/> Masterpiece </h2>
          <p>
          
Most entrepreneurs want to create their own web3
 sites,<br/> unfortunately, they dont know much about creating 
 one.<br/> Web3Makr makes it easier for newbies to create a <br/>blockchain-based 
 collectibles solution without the hassle<br/> of leaving their favorite creation 
 tools and by simple drag<br/> and drop functionality.
          </p>
          <Button variant="outline-primary" style={{color: 'white', border: 'none',  background: 'transparent'}}><img src={strtbtn} alt='Profile' style={{width: '150px', height:'80'}}></img></Button>
          
        </div>
        {/* strtbtn */}

        <div className='col col-sm-12 col-md-6 col-lg-6'>
        <img src={rct} alt='Profile' style={{width: '400px', height:'500'}}></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import  { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

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

import bck2 from '../assets/images/Mask2.png';

import dog from '../assets/images/Group 61.png';

import circle from '../assets/images/Group 62.png';
// import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';

import p5 from '../assets/images/p5.png';

import p6 from '../assets/images/p6.png';

import Group_ from '../assets/images/Group_.png';




const Future = () => {
  return (
   
   
    <div className='container hero-section-margin' style={{backgroundImage: `url(${bck2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      
     


      <div className='row'>
        <div className='col col-sm-12 col-md-12 col-lg-12'>
          <h2>The Future of Web3 NoCode</h2> <br/>
          <p> <b>Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.</b> </p>
        </div>
      </div>

{/* /////////////////////////////////////////////// */}
      <div className='row'>
        <div className='col col-sm-12 col-md-6 col-lg-6'>
       
        <img src={dog} alt='Profile' style={{width: '200px', height:'200'}}></img>
        
        <img src={p3} alt='Profile' style={{width: '200px', height:'200'}}></img>
        
        <img src={p4} alt='Profile' style={{width: '200px', height:'200'}}></img>
        
         </div>

         </div>


         <div className='row'>
         <div className='col col-sm-12 col-md-6 col-lg-6'>
            
        <img src={Group_} alt='Profile' style={{width: '200px', height:'200'}}></img>
         <img src={p5} alt='Profile' style={{width: '200px', height:'200'}}></img>
         
         <img src={p6} alt='Profile' style={{width: '200px', height:'200'}}></img>
        
         </div>

         </div>
      

    </div>
  );
}

export default Future;

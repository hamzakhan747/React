import React from 'react'

import imageOne from '../../assets/images/b4.jpg'
import imageTwo from '../../assets/images/b3headerslider.jpg'
import imageThree from '../../assets/images/b2headerslider.jpg'

import Carousel from 'react-bootstrap/Carousel'


export default ()=>{

    return(
        <>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 imageone"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imageTwo"
     
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  
</Carousel>
        </>

    );

}
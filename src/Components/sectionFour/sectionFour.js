import React from 'react'
import Style from '../sectionFour/sectionFourStyle';
import SlideImageOne from '../../assets/images/bootcampbanner-1556196041307.jpeg';
import SlideImageTwo from '../../assets/images/screenshot-at-pm-1556128610669.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

export default ()=>
{
    
    return(
        <>
    
         <section className="sect-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-4-div4">
                    <h1>WHAT'S NEW?</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SlideImageOne}
      
    />
    <Carousel.Caption>
    <span aria-hidden="true" className="carousel-control-next-icon" />
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SlideImageTwo}
    />

  
  </Carousel.Item>
  
</Carousel>
                </div>
            </div>
        </div>

    </section>




    <Style/>
        </>
    );
}
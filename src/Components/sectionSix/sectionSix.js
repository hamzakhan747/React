import React from 'react'
import imageOne from '../../assets/images/larki.jpg';
import imageTwo from '../../assets/images/chineselarki.jpg';
import imageThree from '../../assets/images/laurghinboda.jpg';
import Style from '../sectionSix/sectionSixStyle';
export default()=>{
return(
    <>
<section className="sect-6">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-6-div6">
                    <div className="col-md-4 subdiv">
                        <h3>SCTE•ISBE Standards</h3>
                        <h6>DOCUMENTATION, FORMS, BULLETINS, AND MORE</h6>
                        <p>
                            The industry's only ANSI-accredited forum for the development of technical specifications supporting cable telecommunications.
                        </p>
                        <a><button className="btn btn-medium btn-cynide-dark">VISIT STANDARDS</button></a>

                    </div>
                    <div className="col-md-4 sudiv2">
                        <img src={imageOne}/>
                    </div>
                    <div className="col-md-4 subdiv">
                        <h3>SCTE•ISBE Certification</h3>
                        <h6>PREPARE, TAKE EXAMS, AND STAY CERTIFIED</h6>
                        <p>
                            The cable industry's premier endorsement for professionals in various levels of expertise - across all areas of the cable network.
                        </p>
                        <a><button className="btn btn-medium btn-dark-blue">VISIT STANDARDS</button></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="sect-6">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-6-div6">
                    <div className="col-md-4 sudiv2">
                        <img src={imageTwo}/>
                    </div>
                    <div className="col-md-4 subdiv">
                        <h3>SCTE•ISBE Education</h3>
                        <h6>TRAINING, COURSEWORK, AND RESOURCES</h6>
                        <p>
                            The knowledge, tools and resources necessary for organizations to develop their technical workforce, and for professionals to advance their careers.
                        </p>
                        <a><button class="btn btn-medium btn-dark-blue">VISIT STANDARDS</button></a>
                    </div>
                    <div className="col-md-4 subdiv sudiv2">
                        <img src={imageThree}/>
                    </div>
                </div>
            </div>
        </div>
    </section>

<Style/>
    </>
);

}
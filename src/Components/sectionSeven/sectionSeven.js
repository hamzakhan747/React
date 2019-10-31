import React from 'react'
import Style from '../sectionSeven/sectionSevenStyle';
import image from '../../assets/images/tialopez-1561137805727.jpeg';
export default()=>{
    return(
<>
<section className="sect-7">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-7-div7">
                    <div className="col-md-8">
                        <h1>MEMBER SPOTLIGHT</h1>
                        <p>
                            Meet a few of our active SCTE•ISBE members. SCTE•ISBE has over 22,000 members across the globe and many of
                            them actively volunteer within the society. Chapter leaders, standards committee members, speakers and certification proctors are just a few of the opportunities. Get Involved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="sect-7">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-7-div7">
                    <div className="col-md-3">
                        <img src={image}/>
                        <h2>Tia Lopez</h2>
                        <h6>Recipient of the 2019 SCTE Foundation's Catherine Oakes Scholarship</h6>
                        <p>
                            <span className="fw-900">
                                Member Since 2014<br/>
                                Chapter:
                            </span>
                            South And Central Americas Chapter
                        </p>
                    </div>
                    <div className="col-md-3">
                    <img src={image}/>
                        <h2>Keith Weilert, Comcast</h2>
                        <h6>Golden State Chapter Technician of the Year</h6>
                        <p>
                            <span className="fw-900">
                                Member Since 2013<br/>
                                Chapter:
                            </span>
                            Golden Gate Chapter
                        </p>
                    </div>
                    <div className="col-md-3">
                    <img src={image}/>
                    </div>
                    <div className="col-md-3">
                    <img src={image}/>
                    </div>
                </div>
            </div>
        </div>
    </section>



<Style/>
</>
    );
}
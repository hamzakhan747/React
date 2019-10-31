import React from 'react'
import Style from '../sectionNine/sectionNineStyle';
export default()=>{
return(
    <>
 <section className="sect-9">
        <div className="wrap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 sect-9-div9">
                        <div className="col-md-5 sect-9-div9">
                            <div className="inner">
                                <ul>
                                    <li>SERVING THE CABLE INDUSTRY SINCE 1969</li>
                                    <li>
                                        SCTE
                                        <strong>•</strong>
                                        ISBE is proud to serve as the technical and applied science leader for the cable telecommunications industry, providing
                                        meaningful resources and programs for members and the industry.
                                    </li>
                                    <li>© 2019 SCTE•ISBE. ALL RIGHTS RESERVED.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <ul>
                                <li>QUICKLINKS</li>
                                <li><a href="#">Standards</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Certification</a></li>
                                <li>Terms of Use</li>
                                <li><a href="#">GDPR / Privacy</a></li>
                                <li><a href="#" target="">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <ul>
                                <li>GET STARTED</li>
                                <li>Get started on your membership journey today for FREE. Access exclusive content and member benefits right away.</li>
                            </ul>
                            <ul className="list-group list-group-horizontal ulbtn">
                                <li className="">
                                    <button className="btn btn-orange btn-medium fw-n">TAKE A TEST DRIVE</button>
                                </li>
                                <li className="">
                                    <a href="#"><button class="btn btn-grey-light">CONTACT US</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<Style/>
    </>
);

}
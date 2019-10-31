import React from 'react'
import Style from '../sectionFive/sectionFiveStyle';
import Dropdown from '../../assets/images/orangearrowdown.png';
export default ()=>{
    return(
        <>
        <section className="sect-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-5-div5">
                    <h3>GET CONNECTED. JOIN US!</h3>
                    <p>
                        Members get exclusive access to apps, tools and content resources unavailable anywhere else.<br/>
                        Automatically receive the benefits of SCTE
                        <b>•</b>
                        ISBE membership when you join.
                    </p>
                    <form className="form-inline">
                        <input type="text" name="" placeholder="Name"/>
                        <input type="text" name="" placeholder="Contact Number"/>
                        <input type="email" name="" placeholder="Email"/>
                    </form>
                    <a href="#"><button className="btn btn-medium btn-grey">START ME UP!</button></a>
                    <a href="#"><img src={Dropdown}/></a>
                </div>
            </div>
        </div>
    </section>
<Style/>
    </>
    );
}
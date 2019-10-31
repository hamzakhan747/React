import React from 'react'
import Style from '../sectionThree/sectionThreeStyle';
import Dropdown from '../../assets/images/orangearrowdown.png';
export default ()=>
{
    return(
        <>
         <section className="sect-3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-3-div3">
                    <a href="#"><img src={Dropdown}/></a>
                </div>
            </div>
        </div>
    </section>
    <Style/>
        </>
    );
}
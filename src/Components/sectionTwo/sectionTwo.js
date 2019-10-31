import React from 'react';
import Style from './sectionTwoStyle'
import '../../assets/style/style.css'
export default ()=>
{
    return(
        <>
         <section className="sect-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12 sect-2-div2">
                    <ul>
                        <li><a><button className="btn btn-medium btn-primary">FIND A CHAPTER</button></a></li>
                        <li><a><button className="btn btn-medium btn-orange">Find my Company</button></a></li>
                        <li><a><button className="btn btn-medium btn-green">Join SCTE•ISBE</button></a></li>
                        <li><a><button className="btn btn-medium btn-grey">Membership Benefits</button></a></li>


                    </ul>
                </div>
            </div>
        </div>
    </section>
    <Style/>
</>
    );
}

import React from 'react'
import Style from '../sectionEight/sectionEightStyle';
export default()=>{
return(
    <>
<section className="sect-8">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 sect-8-div8">
                    <div className="col-md-8 sect-8-div8-subdiv1">
                        <h3>Register for your company-sponsored training</h3>
                    </div>
                    <div className="col-md-4 sect-8-div8-subdiv2">
                        <select>
                            <option>Select Your Company</option>
                            <option>Cox Communications</option>
                            <option>Charter Communications</option>
                            <option>Test EL Company</option>
                        </select>
                        <button className="btn">GO</button>
                    </div>

                </div>
            </div>
        </div>
    </section>

<Style/>
    </>
);

}
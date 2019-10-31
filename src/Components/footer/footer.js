import React from 'react';
import '../../assets/style/style.css';

import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Search from '../../assets/images/icon.png';
import Design from '../footer/footerStyle';
export default()=>
{
    return(
        <>
 <section className="sect-11">

<div className="container-fluid sect-11">
    <div className="row align-items-center p-5 ">

        <div className="col-md-4 col-sm-4">
            <ul className="list-group list-group-horizontal div-1">
                <li className=""><img src={Facebook}/></li>
                <li className="ml-2"><img src={Twitter}/></li>
                <li className="ml-2"><img src={Twitter}/></li>
                <li className="ml-2"><img src={Twitter}/></li>
            </ul>
        </div>

        <div className="col-md-4  col-sm-4 div-2">
            <p className="para1">
                You are welcome to call upon any staff members for support and assistance.<br/>
                Email: info@scte.org Phone:800 542 5040 or 610 363 6885 Fax:610 884 7237
            </p>
            <p className="para2">140 Philips Rd,Exton,PA 19341  Local Phone: 610 363 6888</p>

        </div>

        <div className="col-md-4 col-sm-4 div-3">
            <ul className="list-group list-group-horizontal">
                <li className=""><img src={Search}/></li>
                <li className="ml-3"><p>SEARCH</p></li>
                </ul>
        </div>

    </div>
</div>

</section>

<Design/>

</>

    );
}
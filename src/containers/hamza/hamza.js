import React from 'react';
import Layout from '../../Components/layout/layout';
import SectionOne from '../../Components/sectionOne/sectionOne';
import SectionTwo from '../../Components/sectionTwo/sectionTwo';
import SectionThree from '../../Components/sectionThree/sectionThree';
import SectionFour from '../../Components/sectionFour/sectionFour';
import SectionFive from '../../Components/sectionFive/sectionFive';
import SectionSix from '../../Components/sectionSix/sectionSix';
import SectionSeven from '../../Components/sectionSeven/sectionSeven';
import SectionEight from '../../Components/sectionEight/sectionEight';
import SectionNine from '../../Components/sectionNine/sectionNine';
import SectionTen from '../../Components/sectionTen/sectionTen';
import Corousal from '../../Components/carousal/carousal'
import 'bootstrap/dist/css/bootstrap.min.css';

export default ()=>
{
    return(
        <Layout>
             <Corousal/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
            <SectionNine/>
            <SectionTen/>
        </Layout>
    );
}
import React from 'react';
import Background from '../../assets/images/b2headerslider.jpg';
export default ()=>
(
    <style js="true">{`
   
   
    



    .logo{
        display:flex;
        
        padding-left: 20px;
    }
    .header-div2{
        padding-right: 20px;
    }
    .header-div2 ul {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        list-style: none;
        color: white;
        padding:0;
    }
    .header-div2 ul li
    {
        padding-left:20px;
    }
    .header-div1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color:black;
    }
    .container.ul-reset {
        padding-right: 42px;
    }
    nav {
        background: #424242;
        font-size: 0;
        position: relative;
    }
    nav > ul > li {
        display: inline-block;
          font-size: 14px;
          padding: 0 15px;
          position: relative;
    }
    nav > ul > li:first-child {padding-left: 0;}
    nav > ul > li:last-child {padding-right: 0;}
    nav > ul > li > a {
        color: #fff;
          display: block;
          position: relative;
          padding: 20px 0;
          border-bottom: 3px solid transparent;
    }
    nav > ul > li:hover > a {
        color: #69aae0; 
          border-bottom: 3px solid #69aae0;
    }
    
    
    
    /* #Mega Menu Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    .mega-menu {
        background: #f0f0f0;
          display: none;
          left: 0;
          position: absolute;
          text-align: left;
          width: 100%;
    }
    .mega-menu h3 {color: #444;}
    .mega-menu ul {
        float: left;
          margin-bottom: 20px;
          margin-right: 40px;
          width: 205px;
    }
    .mega-menu ul:last-child {margin-right: 0;}
    .mega-menu a {
        border-bottom: 1px solid #ddd;
          color: #4ea3d8;
          display: block;
          padding: 10px 0;
    }
    .mega-menu a:hover {color: #2d6a91;}
    
    
    
    /* #Droppable Class Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    .droppable {position: static;}
    .droppable > a:after {
        content: "\f107";
          font-family: FontAwesome;
          font-size: 12px;
          padding-left: 6px;
          position: relative;
          top: -1px;
    }
    .droppable:hover .mega-menu {display: block;}
    
    
    
    /* #Browser Clearfix
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
    .cf:before,
    .cf:after {
        content: " "; /* 1 */
       display: table; /* 2 */
    }
    .cf:after {clear: both;}

    `}

    </style>
);
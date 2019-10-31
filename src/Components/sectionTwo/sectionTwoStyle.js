import React from 'react';

export default ()=>
(
    <style js="true">{`
   
    .sect-2 .container {
        background-image: url(../Asserts/map.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 110vh;
    }

    .sect-2-div2 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

        .sect-2-div2 ul {
            display: flex;
            justify-content: center;
            text-decoration: none;
            list-style: none;
            color: white;
            margin-top: 25%;
        }

            .sect-2-div2 ul .btn-orange {
                background-color: #f17a28;
                color: white;
            }

            .sect-2-div2 ul .btn-green {
                background-color: #bfcd31;
                color: white;
            }

            .sect-2-div2 ul .btn-grey {
                background-color: gray;
                color: white;
            }

                .sect-2-div2 ul .btn-grey:hover {
                    background-color: #2a2b2c;
                }

    `}

    </style>
);
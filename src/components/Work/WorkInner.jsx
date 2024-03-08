import React from 'react';
import tank from "../../assets/tank.svg"
import brazil from "../../assets/brazil.svg"
import vitamix from "../../assets/vitamix.svg"
import herstyle from "../../assets/herstyle.svg"
import ab from "../../assets/ab.svg"

const WorkInner = () => {
    const details = [
        {
            pic: tank,
            title: "TANK HOUSE GENERAL"
        },
        {
            pic: brazil,
            title: "BRAZILIANO"
        },
        {
            pic: vitamix,
            title: "VITAMIX"
        },
        {
            pic: herstyle,
            title: "HERSHEYS S’MORES"
        },
        {
            pic: ab,
            title: "ABERB"
        },
    ]
    return (
        <div className='flex flex-col gap-[51px] my-[262px] px-10 relative'>
            {
                details.map((data, index) => <div className='flex items-center gap-10 text-[#808080]' key={index}><p className='text-[64px] font-bold'>{data.title}</p> <img src={data.pic} alt="" /></div>)
            }
        </div>
    );
};

export default WorkInner;
import React from 'react';
import ccua from "../../assets/ccua.svg"
import vitamix from "../../assets/vitamixNew.svg"
import lifeBrand from "../../assets/lifeBand.svg"
import modern from "../../assets/morderSolution.svg"
import scotts from "../../assets/scotts.svg"
import revera from "../../assets/scotts.svg"
import hershey from "../../assets/hershey.svg"
import edit from "../../assets/edit.svg"
import muskoka from "../../assets/Muskoka.svg"
import { Link } from 'react-router-dom';

const WorkInner = () => {
    const details = [
        {
            pic: ccua,
            title: "CCUA",
            path: "ccua"
        },
        {
            pic: vitamix,
            title: "VITAMIX",
            path: "vitamix"
        },
        {
            pic: lifeBrand,
            title: "LIFE BRAND",
            path: "life-brand"
        },
        {
            pic: modern,
            title: "MODERN SOLUTION",
            path: "modern-solution"
        },
        {
            pic: scotts,
            title: "SCOTTS MIRACLE GROW",
            path: "scotts-miracle-grow"
        },
        {
            pic: revera,
            title: "REVERA LIVING",
            path: "revera-living"
        },
        {
            pic: hershey,
            title: "HERSHEY'S MORES",
            path: "hersheys-mores"
        },
        {
            pic: edit,
            title: "EDIT",
            path: "edit"
        },
        {
            pic: muskoka,
            title: "MUSKOKA GROWN",
            path: "muskoka-grown"
        },
    ]
    return (
        <div className='flex flex-col gap-[51px] my-[50px] md:my-[80px] lg:my-[140px] px-10 relative'>
            {
                details.map((data, index) => <Link key={index} to={`/project-details/${data.path}`}>
                    <div className='flex items-center gap-10 text-[#808080] cursor-pointer hover:scale-105 hover:px-10' ><p className='md:text-[32px] lg:text-[64px] font-bold'>{data.title}</p> <img src={data.pic} alt="" /></div></Link>)
            }
        </div>
    );
};

export default WorkInner;
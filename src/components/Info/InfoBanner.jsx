import React from 'react';
import banner from '../../assets/infobanner.svg'

const InfoBanner = () => {
    return (
        <div className='info_banner'>

            <p className='text-[108px] font-bold mb-5'>Hey, this is <br /> David</p>
            <p className='text-[32px] font-normal mb-[83px] ml-[104px] max-w-[920px]'>I’ve spent a couple of decades crafting brands and obsessing over
                what makes business and project fly. I have a creative studio
                called Charrette — collaborating on brave ideas with courageous
                leaders.</p>
            <img className='mb-[82px]' src={banner} alt="" />
            <p className='text-[84px] font-semibold mb-[64px] flex justify-center'>Here’s what you can <br /> expect from me...</p>
        </div>
    );
};

export default InfoBanner;
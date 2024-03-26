import React from 'react';

const InfoGrid = () => {
    return (
        <div className='mb-[135px]'>
            <div className='grid grid-cols-3 gap-[47px] mb-6'>
                <div className='bg-black pt-[92px] px-5   pb-[111px]'>
                    <p className='text-white text-[48px] font-bold'>I’ll bring years of experience, big energy and fresh thinking.</p>


                </div>
                <div className='col-span-2 bg-black px-5 pt-[92px]  pb-[111px]'>
                    <p className='text-white text-[48px] font-bold'>Listen, challenge and reconnect the dots — joining your team with
                        conviction and openness.</p>


                </div>

            </div>
            <div className='grid grid-cols-2 gap-5 '>
                <div className='bg-black pt-[92px] px-5   pb-[111px]'>
                    <p className='text-white text-[48px] font-bold'>Bridge the gap between creative and commercial objectives —
                        speaking both languages.</p>


                </div>
                <div className=' bg-black px-5 pt-[92px]  pb-[111px]'>
                    <p className='text-white text-[48px] font-bold'>Recognise potential — pushing brands to become better than you ever
                        thought possible.</p>


                </div>

            </div>

        </div>
    );
};

export default InfoGrid;
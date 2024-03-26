import React from 'react';

const InfoGrid = () => {
    return (
        <div className='mb-[135px]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-[47px] mb-6'>
                <div className='bg-black p-5 lg:px-5 lg:pt-[92px]  lg:pb-[111px] w-full'>
                    <p className='text-white text-2xl lg:text-[48px] font-bold leading-[150%]'>I’ll bring years of experience, big energy and fresh thinking.</p>

                </div>
                <div className='lg:col-span-2 bg-black p-5 lg:px-5 lg:pt-[92px]  lg:pb-[111px]'>
                    <p className='text-white text-2xl lg:text-[48px] font-bold leading-[150%]'>Listen, challenge and reconnect the dots — joining your team with
                        conviction and openness.</p>


                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <div className='bg-black p-5 lg:px-5 lg:pt-[92px]  lg:pb-[111px]'>
                    <p className='text-white text-2xl lg:text-[48px] font-bold leading-[150%]'>Bridge the gap between creative and commercial objectives —
                        speaking both languages.</p>


                </div>
                <div className=' bg-black p-5 lg:px-5 lg:pt-[92px]  lg:pb-[111px]'>
                    <p className='text-white text-2xl lg:text-[48px] font-bold leading-[150%]'>Recognise potential — pushing brands to become better than you ever
                        thought possible.</p>


                </div>

            </div>

        </div>
    );
};

export default InfoGrid;
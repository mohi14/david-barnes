import { Link } from 'react-router-dom';
import gallery1 from '../../assets/gallery1.svg';
import gallery2 from '../../assets/gallery2.svg';
import gallery3 from '../../assets/gallery3.svg';
import gallery4 from '../../assets/gallery4.svg';
import gallery5 from '../../assets/gallery5.svg';
import gallery6 from '../../assets/gallery6.svg';

const Gallery = () => {
    return (
        <div className='px-10 pb-16 text-center relative z-50 '>
            <img className='mx-auto mb-[268px]' src={gallery1} alt="" />
            <div className='flex flex-start gap-4 justify-between mb-[176px]'>
                <img src={gallery2} alt="" />
                <img className='mt-[304px]' src={gallery3} alt="" />
            </div>
            <div className='flex flex-start gap-4 justify-around mb-[211px]'>
                <img src={gallery4} alt="" />
                <img className='mt-[446px]' src={gallery1} alt="" />
            </div>
            <div className='flex flex-start gap-[128px] justify-center mb-[102px]'>
                <img src={gallery5} alt="" />
                <img className='mt-[528px]' src={gallery6} alt="" />
            </div>
            <Link to="/work" className='text-5xl font-semibold'>View Projects</Link>


        </div>
    );
};

export default Gallery;
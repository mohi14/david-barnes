import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useState } from 'react'

const Header = () => {
  const { pathname } = useLocation()

  const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <><div className='sticky top-0 px-10 pt-5 flex items-center gap-4 justify-between mb-16'>
      <Link to="/"><img src={logo} alt="" /></Link>

      {/* <p className='text-[32px] font-bold'>{pathname === "/work" ? "WORKS" : pathname === "/infos" ? "INFOS" : "Creative Leader & Writer"}</p> */}
      <p className='lg:text-[32px] font-bold hidden lg:block headerText'>Creative Leader & Writer</p>

      <div className='text-2xl font-semibold hidden lg:flex items-center gap-6  linkText'>
        <Link to="/work">WORK</Link>
        <Link to="/awards">AWARDS</Link>
        <Link to="/infos">INFO</Link>
      </div>


    </div>
      <div className='absolute top-[35px] right-[10px] z-[60] lg:hidden' onClick={() => setOpenNavbar(!openNavbar)}>
        <span className={`w-[45px] h-[4px]    block ${openNavbar ? "mt-4 rotate-45 bg-white" : "mt-1 bg-black"} ease-in duration-300 `}></span>
        <span className={`w-[45px] h-[4px]  bg-black   ${openNavbar ? "hidden" : "block mt-1"} ease-in duration-300`}></span>
        <span className={`w-[45px] h-[4px]    block ${openNavbar ? "-mt-1 -rotate-45 bg-white" : "mt-1 bg-black"} ease-in duration-300`}></span>
      </div >


      <div className={`fixed  h-full top-0 z-50 ${openNavbar ? "bg-black w-full " : "bg-white w-0 "} ease-in duration-300 text-2xl font-semibold  items-center gap-6 text-white flex flex-col justify-center `} onClick={() => setOpenNavbar(false)}>

        <Link to="/work" className={`${openNavbar ? "block" : "hidden"}`}>WORK</Link>
        <Link to="/awards" className={`${openNavbar ? "block" : "hidden"}`}>AWARDS</Link>
        <Link to="/infos" className={`${openNavbar ? "block" : "hidden"}`}>INFO</Link>

      </div>
    </>
  )
}

export default Header
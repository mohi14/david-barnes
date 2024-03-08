import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <div className='sticky top-0 px-10 pt-5 flex items-center gap-4 justify-between mb-16'>
      <Link to="/"><img src={logo} alt="" /></Link>

      <p className='text-[32px] font-bold'>{pathname === "/work" ? "WORKS" : pathname === "/infos" ? "INFOS" : "Creative Leader & Writer"}</p>

      <div className='text-2xl font-semibold flex items-center gap-6'>
        <Link to="/work">WORK</Link>
        <Link to="/infos">INFO</Link>
      </div>

    </div>
  )
}

export default Header
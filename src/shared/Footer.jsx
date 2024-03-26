import { Link } from 'react-router-dom'
import email from '../assets/email.svg'

const Footer = () => {
  return (
    <div className=' p-3 lg:p-10 border-t border-black text-lg lg:text-2xl font-semibold flex flex-wrap items-center gap-2 lg:gap-4 justify-between'>
      <a className='flex items-center gap-5' href="mailto:tdavidbarnes@gmail.com"><img src={email} alt="" /> tdavidbarnes@gmail.com</a>

      <p>© 2024 David Barnes </p>
      <Link to="#">Awards</Link>
    </div>
  )
}

export default Footer
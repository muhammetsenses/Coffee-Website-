
import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from "../../assets/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const [isNavActive,setIsNavActive] = useState(false)

  const clickedNav = () => {
    setIsNavActive(!isNavActive)
    console.log(isNavActive)
  }

  return (
    <>
    <nav>
      <Link to=""><img className='img-fluid logo' src={logo} alt="" /></Link>
      <div>
        <ul id='navbar'  className={isNavActive ? `active`: ""}>
          <li><Link onClick={() => clickedNav()} className='active' to={"/"}>Anasayfa</Link></li>
          <li><Link onClick={() => clickedNav()} to={"/menu"}>Menu</Link></li>
          <li><Link onClick={() => clickedNav()} to={"/hakkımızda"}>Hakkımızda</Link></li>
          <li><Link onClick={() => clickedNav()} to={"/iletisim"}>İletişim</Link></li>
          <li><Link onClick={() => clickedNav()} to={"https://www.instagram.com/espressolove_tr/"} target='_blank'><FaInstagram  className='instagram-icon'/></Link></li>
        </ul>
      </div>
      <div onClick={() => clickedNav()} id='mobile'>
        {isNavActive ? <i><FaTimes /> </i> : <i><FaBars /></i>}
        
      </div>
    </nav>
    </>
  )
}

export default Navbar
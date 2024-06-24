import { useEffect, useState } from "react"
import "./footer.css"

const Footer = () => {
  const [showFooter ,setShowFooter] = useState<boolean>(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true)
    }, 1500);
    return () => clearTimeout(timer);
  },[])
  if(!showFooter){
    return null
  }
  return (
    <>
    <div className="footer">
        <div className="footer-text">© 2024 ESPRESSOLOVE | Her hakkı saklıdır.<span></span>  </div>
    </div>
    </>
  )
}

export default Footer
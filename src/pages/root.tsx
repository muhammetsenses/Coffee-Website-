import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/navbar"
import Footer from "../../src/components/Footer/footer"

const Root = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
    
  )
}

export default Root
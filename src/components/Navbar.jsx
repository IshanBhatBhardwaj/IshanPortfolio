import { useState, useEffect } from "react";
import menu from "../images/menu.svg"


export default function Navbar() {

    const [visible, setVisible] = useState(true) 
const [prevScrollPos, setPrevScrollPos] = useState(0) 

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    };

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  
    return (
        <div className={`navBar ${visible ? "visible" : "hidden"}`}>

          <div className="navBar-links">
              <div className="links-sm">
                <p>MY MUSIC</p>
                <p>LINKEDIN</p>
              </div>
              <div className="menu-sm">
                <img src={menu}></img>
              </div>
              <div className="links-md">
                <p>954-998-9982</p>
                <p>GITHUB</p>
                <p>LINKEDIN</p>
                <p>MY MUSIC</p>
              </div>
              <div className="links-lg">
                <p>954-998-9982</p>
                <p>GITHUB</p>
                <p>LINKEDIN</p>
                <p>MY MUSIC</p>
                <p>ISHANBHATBHARDWAJ@ICLOUD.COM</p>
              </div>
          </div>
        </div>
    )
}
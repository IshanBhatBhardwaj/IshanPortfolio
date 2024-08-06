import { useState, useEffect, Link } from "react";
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
              <a className="links-text" href="https://github.com/IshanBhatBhardwaj?tab=stars" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a className="links-text" href="https://www.linkedin.com/in/ishan-bhardwaj-2b43a1255" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              </div>
              <div className="links-md">
                <p>954-998-9982</p>
                <a className="links-text" href="https://github.com/IshanBhatBhardwaj?tab=stars" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a className="links-text" href="https://www.linkedin.com/in/ishan-bhardwaj-2b43a1255" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a className="links-text" href="https://open.spotify.com/artist/6Jf1Z1vBq4aMRcUZQlWEU4?si=Cu0c1KQjSoqQtieOXeOqRg&nd=1&dlsi=c57edc583fb04925" target="_blank" rel="noopener noreferrer">MY MUSIC</a>
                </div>
              <div className="links-lg">
                <p>954-998-9982</p>
                <a className="links-text" href="https://github.com/IshanBhatBhardwaj?tab=stars" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a className="links-text" href="https://www.linkedin.com/in/ishan-bhardwaj-2b43a1255" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a className="links-text" href="https://open.spotify.com/artist/6Jf1Z1vBq4aMRcUZQlWEU4?si=Cu0c1KQjSoqQtieOXeOqRg&nd=1&dlsi=c57edc583fb04925" target="_blank" rel="noopener noreferrer">MY MUSIC</a>
                <p>ISHANBHATBHARDWAJ@ICLOUD.COM</p>
              </div>
          </div>
        </div>
    )
}
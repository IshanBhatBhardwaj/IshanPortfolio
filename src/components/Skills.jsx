import { useEffect, useState } from "react"
const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]
const getRandColor = () => {
    const randomIdx = Math.floor(Math.random() * colors.length)
    return `rgb(${colors[randomIdx][0]},${colors[randomIdx][1]},${colors[randomIdx][2]})`
  }

export default function Skills() {

    const [randState, setState] = useState(0)

    useEffect(() => {
      const handleScroll = () => {
        setState(prevState => prevState + 1)
      }

      window.addEventListener("scroll", handleScroll)

      return() => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
        <div className="skills">
          <div className="skills-title">
            <div style={{color: getRandColor()}}>S</div>
            <div style={{color: getRandColor()}}>K</div>
            <div style={{color: getRandColor()}}>I</div>
            <div style={{color: getRandColor()}}>L</div>
            <div style={{color: getRandColor()}}>L</div>
            <div style={{color: getRandColor()}}>S</div>
          </div>

          <div className="skills-loop">
            <div className="marquee">
              <p>React</p>
              <p>TypeScript</p>
              <p>JS</p>
              <p>CSS</p>
              <p>HTML</p>
              <p>Python</p>
              <p>C++</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>Flask</p>
            </div>      
            <div className="marquee">
              <p>React</p>
              <p>TypeScript</p>
              <p>JS</p>
              <p>CSS</p>
              <p>HTML</p>
              <p>Python</p>
              <p>C++</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>Flask</p>
            </div>        
          </div>
        </div>
    )
}
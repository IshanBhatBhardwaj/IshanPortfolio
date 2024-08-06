import { useEffect, useState } from "react"
import Tymeline from "../images/Tymeline.jpg"
import UF from "../images/uf.jpg"
import _8by8 from "../images/8by8.png"
const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]
const getRandColor = () => {
    const randomIdx = Math.floor(Math.random() * colors.length)
    return `rgb(${colors[randomIdx][0]},${colors[randomIdx][1]},${colors[randomIdx][2]})`
  }

  
const Experience = () => {
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
        <div className="experience">
          
            <div className="experience-title">
                <div style={{color: getRandColor()}}>M</div>
                <div style={{color: getRandColor()}}>Y</div>
                <div>E</div>
                <div>X</div>
                <div>P</div>
                <div>E</div>
                <div>R</div>
                <div>I</div>
                <div>E</div>
                <div>N</div>
                <div>C</div>
                <div>E</div>
            </div>

            <div className="experience-images">
              <a className="experience-image-link" href="https://github.com/IshanBhatBhardwaj?tab=stars" target="_blank" rel="noopener noreferrer">
                <div className="slider experience-one">
                  <img src={UF}/>
                  <div className="experience-image-slider-left"></div>
                  <div className="experience-text-left"><span><span className="h1" style={{color: getRandColor()}}><b>AI researcher</b></span> at University of Florida</span></div>
                </div>
              </a>
              
              <div className="experience-column-md">
              <a className="experience-image-link" href="https://github.com/IshanBhatBhardwaj?tab=stars" target="_blank" rel="noopener noreferrer">
                <div className="slider experience-two">
                  <img src={Tymeline}/>
                  <div className="experience-image-slider-top"></div>
                  <div className="experience-image-slider-bottom"></div>
                  <div className="experience-text"><span>Frontend <span className="h1" style={{color: getRandColor()}}><b>Software Engineer</b></span> at Tymeline</span></div>
                </div>
              </a>

              <a className="experience-image-link" href="https://github.com/IshanBhatBhardwaj?tab=stars" target="_blank" rel="noopener noreferrer">
                <div className="slider experience-three">
                  <img src={_8by8}/>
                  <div className="experience-image-slider-top"></div>
                  <div className="experience-image-slider-bottom"></div>
                  <div className="experience-text"><span>Fullstack <span className="h1" style={{color: getRandColor()}}><b>Software Engineer</b></span> voulnteer at 8by8</span></div>
                </div>
              </a>
              </div>
            </div>

        </div>
    )
}

export default Experience
import { useEffect, useState } from "react"
import Tymeline from "../images/Tymeline.jpg"
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
              <div className="experience-one">
                <img src={Tymeline}></img>
                <div className="experience-image-slider-top"></div>
                <div className="experience-image-slider-bottom"></div>
                <div className="experience-one-text"><p>Incoming <b style={{color: 'rgb(218, 143, 255)'}}>Frontend SWE</b> At Tymeline</p></div>
              </div>
              <div className="experience-two">
              <img src={Tymeline}></img>
                <div className="experience-image-slider-top"></div>
                <div className="experience-image-slider-bottom"></div>
                <div className="experience-one-text">Incoming Frontend SWE At Tymeline</div>
              </div>
              <div className="experience-three">
              <img src={Tymeline}></img>
                <div className="experience-image-slider-top"></div>
                <div className="experience-image-slider-bottom"></div>
                <div className="experience-one-text">Incoming Frontend SWE At Tymeline</div>
              </div>
            </div>
        </div>
    )
}

export default Experience
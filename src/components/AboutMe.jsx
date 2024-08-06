import Ishan from "../images/newIshan.jpg"
import {useEffect, useState} from 'react'
const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]
const getRandColor = () => {
    const randomIdx = Math.floor(Math.random() * colors.length)
    return `rgb(${colors[randomIdx][0]},${colors[randomIdx][1]},${colors[randomIdx][2]})`
  }

export default function AboutMe() {

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
      <div className="aboutMe">
        <div className="aboutMe-imageContainer">
          <div className="aboutMe-imageBorder">
            <img src={Ishan}></img>
          </div>
          <div className="aboutMe-imageTitle-sm">
            <div className="h1" style={{color: `${getRandColor()}`}}>I</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>S</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>H</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>A</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>N</div>
          </div>
        </div>

        <div className="aboutMe-text">
          <div className="aboutMe-textTitle-md">
            <div className="h1" style={{color: `${getRandColor()}`}}>A</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>B</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>O</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>U</div>
            <div className="h1" style={{color: `${getRandColor()}`}}>T</div>
            <div className="h1" >M</div>
            <div className="h1" >E</div>

          </div>
          <div className="aboutMe-paragraph">
            <p>Hi! I'm Ishan Bhardwaj, a third-year Computer Science major at UF. I’m passionate about web development and love creating fun, interactive websites. When I’m not coding, you'll find me playing the drums in my band - East Monarch. Music is my other big love, and I enjoy meeting new people through my performances.</p>
          </div>
        </div>

      </div>
    )
}
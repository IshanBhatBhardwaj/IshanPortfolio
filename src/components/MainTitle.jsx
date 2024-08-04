import { useState, useEffect } from "react"

const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]
const getRandColor = () => {
    const randomIdx = Math.floor(Math.random() * colors.length)
    return `rgb(${colors[randomIdx][0]},${colors[randomIdx][1]},${colors[randomIdx][2]})`
  }

export default function MainTitle() {

    const [scrollCount, setScrollCount] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      setScrollCount(prevCount => prevCount + 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (

      <div className="header">
        <div className="h1" style={{color: getRandColor()}}>I</div>
        <div className="h1" style={{color: getRandColor()}}>S</div>
        <div className="h1" style={{color: getRandColor()}}>H</div>
        <div className="h1" style={{color: getRandColor()}}>A</div>
        <div className="h1" style={{color: getRandColor()}}>N</div>
        <div className="h1 hidden">.</div>
        <div className="h1 hidden" style={{color: getRandColor()}}>B</div>
        <div className="h1 hidden" style={{color: getRandColor()}}>H</div>
        <div className="h1 hidden" style={{color: getRandColor()}}>A</div>
        <div className="h1 hidden" style={{color: getRandColor()}}>T</div>
        <div className="h1 hidden">.</div>
      </div>


    )
}
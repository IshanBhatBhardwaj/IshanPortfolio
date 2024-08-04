const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]
const getRandColor = () => {
    const randomIdx = Math.floor(Math.random() * colors.length)
    return `rgb(${colors[randomIdx][0]},${colors[randomIdx][1]},${colors[randomIdx][2]})`
  }

  
export default function IntroTextAnimation() {
    return (
        <div className="intro-text">
            <div className="first-container">
                <p className="first">Hello, my name is <b style={{color: getRandColor()}}>Ishan Bhat Bhardwaj</b></p>
            </div>

            <div className="second-container">
                <p className="second">A <b style={{color: getRandColor()}}>junior</b> at the <b style={{color: getRandColor()}}>University of Florida</b></p>
            </div>

            <div className="third-container">
                <p className="third">With experience in <b style={{color: getRandColor()}}>web development</b></p>
            </div>
        </div>
    )
}
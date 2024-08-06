import {useState, useRef, useEffect} from 'react'
import video from "../videos/clubFinityVideo.mp4"
import apricityVideo from "../videos/apricityVideo.mp4"
import chatGPTvideo from "../videos/chatGPTVideo.mp4"
import flixFinderVideo from "../videos/flixFinderVideo.mp4"

const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]

const getRandColor = () => {
    const randomIdx = Math.floor(Math.random() * colors.length)
    return `rgb(${colors[randomIdx][0]},${colors[randomIdx][1]},${colors[randomIdx][2]})`
  }

export default function Projects() {

    const [randState, setState] = useState(0)
    const clubFinityRef = useRef(null)
    const apricityRef = useRef(null)
    const flixFinderRef = useRef(null)
    const chatGPTRef = useRef(null)
    const refs = [clubFinityRef, apricityRef, flixFinderRef, chatGPTRef]


    useEffect(() => {
      const handleScroll = () => {
        setState(prevState => prevState + 1)
      }

      window.addEventListener("scroll", handleScroll)

      return() => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    const handleMouseEnter = (idx) => {
      const videoRef = refs[idx]
      const isPlaying = videoRef.current.currentTime > 0 && !videoRef.current.paused && !videoRef.current.ended && videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;
      if (videoRef.current && !isPlaying) {
        videoRef.current.play()
      }

    }
    const handleMouseLeave = (idx) => {
      const videoRef = refs[idx]
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    return(
        <div className="projects">
          <div className="projects-title">
              <div className="" style={{color: getRandColor()}}>P</div>
              <div className="" style={{color: getRandColor()}}>A</div>
              <div className="pt" style={{color: getRandColor()}}>S</div>
              <div className="pt" style={{color: getRandColor()}}>T</div>
              <div className="pt">P</div>
              <div className="pt">R</div>
              <div className="pt">O</div>
              <div className="pt">J</div>
              <div className="pt">E</div>
              <div className="pt">C</div>
              <div className="pt">T</div>
              <div className="pt">S</div>            
          </div>

          <div className="projects-images">
            <div className="projects-firstRow">
              <div className="projectOneFourContainer">
                <div onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)} className="projectOne">
                  <p className="project-title">CLUBFINITY</p>
                  <video className="project-video" ref={clubFinityRef} src={video} muted="muted"></video>
                </div>
                <p>Next.js | Typescript | Tailwind | MongoDB</p>
              </div>
              <div className="projectTwoThreeContainer test">
                <div onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)} className="projectTwo">
                  <p className="project-title">APRICITY</p>
                  <video className="project-video" ref={apricityRef} src={apricityVideo} muted="muted"></video>
                </div>
                <p>React | CSS</p>
              </div>
            </div>

            <div className="projects-secondRow">
              <div className="projectTwoThreeContainer">
                <div onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)} className="projectThree">
                  <p className="project-title">CHATGPT</p>
                  <video className="project-video" ref={chatGPTRef} src={chatGPTvideo} muted="muted"></video>
                </div>
                <p>React | CSS</p>
              </div>            
              <div className="projectOneFourContainer">
                <div onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} className="projectFour">
                  <p className="project-title">FLIXFINDER</p>
                  <video className="project-video" ref={flixFinderRef} src={flixFinderVideo} muted="muted"></video>
                </div>
                <p>React | CSS | Flask </p>
              </div>
            </div>
          </div>
        </div>
    )
}
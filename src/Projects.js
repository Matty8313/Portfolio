import "./Projects.scss"
import Phone from "./Phone"
import Portfolio from "./Portfolio"
import { useEffect } from "react"
import video from "./Todolista.mp4"
import { Link } from 'react-router-dom';


export default function Projects() {
  let x = window.innerWidth
  useEffect(()=>{
    if(x >= 502){
    document.getElementById('sidebar4').style.backgroundColor = '#8f20db'
    document.getElementById('sidebar1').style.backgroundColor = ''
    document.getElementById('sidebar3').style.backgroundColor = ''
    document.getElementById('sidebar2').style.backgroundColor = ''
    document.getElementById('sidebar5').style.backgroundColor = ''
     }
  })

  return (
    <>
    <Portfolio/>
    <div className="container-phone">
      <div className="item-phone">
    <Phone/>
      </div>
      <div className="item-phone-2">
      <article id='kloc-ar1'> 
      I like to create tools that support the development of individuals and enterprises, which is why I create applications as a hobby that make people's lives easier. At the moment, I created the MyWeek application, which saves tasks to be done by saving data in LocalStorage on the phone using Android's WebView. You can indicate whether the tasks of the week have been completed satisfactorily, excellently or not at all. I used HTML, JavaScript and CSS web technologies. Maybe I can also help you in making the world friendlier to people.
      </article>
      </div>
    </div>
    <div className="container-phone">
      <div className="item-phone-2">
        <article id='kloc-ar2'> 
        I am also in the process of creating a weekly planner in which the user can save tasks to be done in convenient time blocks. The project is still under construction, but on the frontend side it works fine. You can watch a video showing it in action.
        </article>
      </div>
      <div className="item-phone" id="video-lista">
      <video id="lista-vid" src={video} width="300px" height="auto" controls="controls" autoPlay={true} />
      </div>
    </div>
    </>
  )
}

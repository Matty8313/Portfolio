import React from 'react'
import "./Skills.scss"
import SkillCircle from './SkillCircle'
import Portfolio from './Portfolio'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Skills() {
  let x = window.innerWidth
  useEffect(()=>{
    if(x >= 502){
    document.getElementById('sidebar3').style.backgroundColor = '#8f20db'
    document.getElementById('sidebar1').style.backgroundColor = ''
    document.getElementById('sidebar2').style.backgroundColor = ''
    document.getElementById('sidebar4').style.backgroundColor = ''
    document.getElementById('sidebar5').style.backgroundColor = ''
    }
  })
  return (<>
  <div id="bodyg">
    <div >
      <Portfolio/>
    </div>
    <div id="Irow">
              <div className="SkillDIV">
                <details>
                  <summary id="kloc-11">HTML
                  </summary>
                  <p id="kloc-11a">At this point, I am learning semantic HTML to make the pages I create more search engine friendly and speed up indexing
                  </p>
                  <SkillCircle fuel="fuel" fuel2="fuel" fuel3="empty" fuel4="empty" fuel5="empty"/>
                </details></div>
              <div className="SkillDIV">
                <details>
                  <summary id="kloc-12">CSS
                  </summary>
                  <p id="kloc-12a">I had the most use of css, because for a long time I styled wordpress templates for myself
                  </p>
                  <SkillCircle fuel="fuel" fuel2="fuel" fuel3="fuel" fuel4="empty" fuel5="empty"/>
                </details>
              </div>
              <div className="SkillDIV">
                  <details>
                  <summary id="kloc-13">JS
                  </summary>
                  <p id="kloc-13a">In my opinion, I have not mastered the javascript language satisfactorily, but I was able to deal with most of the problems I encountered in a relatively short time
                  </p>
                  <SkillCircle fuel="fuel" fuel2="fuel" fuel3="fuel" fuel4="empty" fuel5="empty"/>
                </details>
              </div>
    </div>
    <div id="Irow">
      <div className="SkillDIV">
        <details>
          <summary id="kloc-14">SCSS
          </summary>
          <p id="kloc-14a">Due to the fact that in many cases we change colors, which was troublesome, I decided to be interested in preprocessors and I chose sass and I use it constantly
          </p>
          <SkillCircle fuel="fuel" fuel2="fuel" fuel3="fuel" fuel4="empty" fuel5="empty"/>
        </details>
      </div>
      <div className="SkillDIV">
        <details>
          <summary id="kloc-15">React JS
          </summary>
          <p id="kloc-15a">I wanted to try what writing code in frameworks looks like and after a hard start I decided to stay with React, because I really liked SPA pages, which provide great comfort of using UX, in short they are very pleasant to use
          </p>
          <SkillCircle fuel="fuel" fuel2="fuel" fuel3="fuel" fuel4="empty" fuel5="empty"/>
        </details>
      </div>
      </div>
      </div>
    
    </>
  )
}

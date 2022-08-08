import React from 'react'
import "./Skills.scss"
import SkillCircle from './SkillCircle'

export default function Skills() {
  return (<>
  <div id="bodyg">
    <div >
      <article id="Skills">
      I started my adventure with programming when I wanted to make a website for wordpress. After some time I noticed that programming (then more styling) in css is more interesting for me than blogging. So I started to inquire how pages are created and I got hooked on it and started treating it as a hobby.
      <h1>Below I present the skills I have acquired during over two years of adventure with writing websites
      </h1>
      </article>
      
    </div>
    <div id="Irow">
              <div class="SkillDIV">
                <details>
                  <summary>HTML
                  </summary>
                  <p>At this point, I am learning semantic HTML to make the pages I create more search engine friendly and speed up indexing
                  </p>
                  <SkillCircle fuel="fuel" fuel2="fuel" fuel3="empty" fuel4="empty" fuel5="empty"/>
                </details></div>
              <div class="SkillDIV">
                <details>
                  <summary>CSS
                  </summary>
                  <p>I had the most use of css, because for a long time I styled wordpress templates for myself
                  </p>
                  <SkillCircle fuel="fuel" fuel2="fuel" fuel3="fuel" fuel4="empty" fuel5="empty"/>
                </details>
              </div>
              <div class="SkillDIV">
                  <details>
                  <summary>JS
                  </summary>
                  <p>In my opinion, I have not mastered the javascript language satisfactorily, but I was able to deal with most of the problems I encountered in a relatively short time
                  </p>
                  <SkillCircle fuel="fuel" fuel2="fuel" fuel3="empty" fuel4="empty" fuel5="empty"/>
                </details>
              </div>
    </div>
    <div id="Irow">
      <div class="SkillDIV">
        <details>
          <summary>SCSS
          </summary>
          <p>Due to the fact that in many cases we change colors, which was troublesome, I decided to be interested in preprocessors and I chose sass and I use it constantly
          </p>
          <SkillCircle fuel="fuel" fuel2="fuel" fuel3="fuel" fuel4="empty" fuel5="empty"/>
        </details>
      </div>
      <div class="SkillDIV">
        <details>
          <summary>React JS
          </summary>
          <p>I wanted to try what writing code in frameworks looks like and after a hard start I decided to stay with React, because I really liked SPA pages, which provide great comfort of using UX, in short they are very pleasant to use
          </p>
          <SkillCircle fuel="fuel" fuel2="fuel" fuel3="empty" fuel4="empty" fuel5="empty"/>
        </details>
      </div>
      </div>
      </div>
    
    </>
  )
}

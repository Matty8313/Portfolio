import React from 'react';
import Kloc from './Kloc';
import Klocreverse from './Klocreverse';
import BackGround from './BackGround';
import "./KlocR.scss";



export default function Logo() {

  return (
    <div >

        <BackGround/>
        <div id="upper-margin">
        <Klocreverse id="upper-margin "link="/About"txt="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dignissimos tempore aperiam repellendus fugit, harum doloribus animi maxime praesentium odit ex adipisci illum beatae inventore nobis modi officiis tempora voluptatibus.
                accusamusminus corrupti, magni porro maiores iusto ullam, pariatur sapiente architecto natus dignissimos nobis id quo ducimus illo, velit repellendus sit?" about="About"
                link2="/Skills" txt2="
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dignissimos tempore aperiam repellendus fugit, harum doloribus animi maxime praesentium odit ex adipisci illum beatae inventore nobis modi officiis tempora voluptatibus. accusamus minus corrupti, magni porro maiores iusto ullam, pariatur sapiente architecto natus dignissimos nobis id quo ducimus illo, velit repellendus sit? " 
                about2="Skills"
                link3="/Projects" txt3="djaskbfkjbdf kjsadbfkdsbf" about3="Projects"
                />
        </div>
                
    </div>
  )
}

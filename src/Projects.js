import React, { useState, useRef, useEffect } from 'react'
import "./Projects.scss"


export default function Projects() {
  let soldiers = 0
  let  gold2 = 1
  let house = 0
  let housePay = 0
  let risk = 0
  function houses(){
    house = house + 1;
    housePay = house*5;
    console.log(housePay);
    console.log(house);
    gold2 = gold2 - 50;
    document.getElementById('countH').innerText = 'Your profits: ' + housePay + '$'
  }
  function mans(){
    soldiers = soldiers + 10
    risk = risk - 1
    document.getElementById('countS').innerText = 'Risk ' + risk
  }
useEffect(() => {
  const interval = setInterval(() => {
    gold2 = gold2 + 1 - soldiers + housePay
    document.getElementById('game-money').innerText = 'money: ' + gold2
  }, 1000)

  return () => clearInterval(interval);
}, []);
  return (
    <>
    <div id='game'>
      <div class='game-box' id="game-money" >
      </div>
      <button class='game-box' id='game-houses' onClick={houses}>
        houses
        <div id='cost'>cost:50 gold/once</div>
        <div id='profits'>profits:5gold/per second</div>
        <div id='countH'>Your profits:0$</div>  
      </button>
      <button class='game-box' id='game-soldiers' onClick={mans}>
        soldiers
        <div id='cost'>cost:10 gold/s</div>
        <div id='profits'>profits: Risk - 1</div>
        <div id='countS'></div>
      </button>
      <button class='game-box' id='game-risk'>
        Risk
        <div id='cost'>1</div>
        <div id='profits'>2</div>
        <div id='count'>3</div>
      </button>
      <div class="item2">domki</div>
      <div class="item2">żołnierze</div>
      <div class="item2" id='castle'>zamek</div>
      <div class="item2">Zagrożenie</div>
      <div class="item2">Rola</div>
      <div>
        <div class="material" id="gold">domki</div>
        <div class="material" id="gold2">żołnierze</div>
        <div class="material" id="gold3">zamek</div>
        <div class="material" id="food">Rola</div>
      </div>
    </div>
    </>
  )
}

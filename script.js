let canvas=document.getElementById("game")
let ctx=canvas.getContext("2d")
let elmaX=200
let elmaY=200
let posX=0
let posY=0
let vx=0
let vy=0
let score=4
let snake=[]
function loop(){
  draw()
  update()
}
function draw(){
  ctx.fillStyle="black"
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle="red"
  ctx.fillRect(elmaX,elmaY,20,20)
  snake.map(t => {
    ctx.fillStyle="green"
    ctx.fillRect(t.posX,t.posY,20,20)
  })
  ctx.fillStyle="white"
  ctx.font="30px Arial"
  ctx.fillText(score-4,200,30)
}
function update(){
  posX+=vx
  posY+=vy
  if(posX!=0||posY!=0){
    snake.forEach(t =>{
      if(posX==t.posX&&posY==t.posY){
        restart()
      }
    })     
  } 
  snake.push({posX:posX, posY:posY})
  if(snake.length>score){
    snake.shift()
  }
  control()
}
function restart(){
  location.reload()
}
function control(){
  if(posX==elmaX&&posY==elmaY){
    elmaX=parseInt(Math.random()*20)*20
    elmaY=parseInt(Math.random()*20)*20
    score+=1
  }
  if(posX>400){
    posX=-20
  }
  else if(posY>400){
    posY=-20
  }
  else if(posX<0){
    posX=400
  }
  else if(posY<0){
    posY=400
  }  
}
window.addEventListener("keyup",function(e){
  if(e.key=="w"){
    vx=0
    vy-=20        
  }
  else if(e.key=="s"){
    vx=0
    vy+=20        
  }
  else if(e.key=="a"){
    vx-=20
    vy=0         
  }
  else if(e.key=="d"){
    vx+=20
    vy=0       
  }  
})
setInterval(loop,1000/15)
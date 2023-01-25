const player1score = document.querySelector('.player1score');
const player2score = document.querySelector('.player2score');
let p1score=0; let p2score = 0;
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const ball = document.querySelector('.ball');
const endingpage = document.querySelector('.endingpage');
const gametable = document.querySelector('.gametable');
let hitEffect = new Audio("./sounds/hit.mp3");
let overEffect = new Audio('./sounds/over.mp3');
let wallEffect = new Audio("./sounds/wall.mp3");
let roundValue = true;
speedScore = 0;
let gameValue = false;


const roundStart = () => {
    endingpage.style.display = 'none'
    gametable.style.opacity = '1'
    gametable.style.filter= 'blur(0px)'
    gameValue = true;
    game();
}
const roundEnd = () => {
    endingpage.style.display = 'block'
    gametable.style.opacity = '0.8'
    gametable.style.filter= 'blur(5px)'
    gameValue= false;
    
   
}
roundEnd(); 

const isRunning = () => {
    if(gameValue == false) {
        
      roundStart();
    }
    else if (gameValue == false) {}
}

window.addEventListener('click',()=>{
    isRunning();
   
})
     const game = () => {
        if (gameValue==true) {
            window.addEventListener('mousemove', (e) => {
                     if(e.y>206 && e.y <= 545) {
                    player1.style.top = e.y-200+"px";
                 }
            })
        }

        

        let upOrDown = Math.floor(Math.random()*2);
        let leftOrRight =  Math.floor(Math.random()*2);
        let wayY = upOrDown?'top':'bottom';
        let wayX = leftOrRight?'left':'right';
        let wayAngle  = 1;
      
        player2score.innerHTML = p2score;
        player1score.innerHTML = p1score;

                    const ballmove = setInterval( ()=> {
                        ballBounds = ball.getBoundingClientRect();
                       player1Bounds = player1.getBoundingClientRect();
                       player2Bounds = player2.getBoundingClientRect();
                       gameTableBounds = gametable.getBoundingClientRect();
                       ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue('left')); 
                       ballTop  = parseInt(window.getComputedStyle(ball).getPropertyValue('top'));
                       player2Top  = parseInt(window.getComputedStyle(player2).getPropertyValue('top'));
                       player2Bottom  = parseInt(window.getComputedStyle(player2).getPropertyValue('bottom'));
                       ballBottom  = parseInt(window.getComputedStyle(ball).getPropertyValue('bottom'));
                       player2TopFromTable = parseInt(window.getComputedStyle(player2).getPropertyValue('top'));
                       player2BottomFromTable =  parseInt(window.getComputedStyle(player2).getPropertyValue('bottom'));
                       player1score.style.transition = "all 1s";
                       player2score.style.transition = "all 1s";
                       ball.style.transition = "background-color 1.5s";
                       
                       switch(speedScore) {
                           case 0:
                               ball.style.backgroundColor = "white";
                            
                               break;
                               case 1:
                               ball.style.backgroundColor = "white";
                            
                               break;
                           case 2:
                               
                               ball.style.backgroundColor = "rgb(245, 205, 205)";
                           break;
                           case 3:
                               
                               ball.style.backgroundColor = "rgb(245, 205, 205)";
                           break;
                           case 4:
                               ball.style.backgroundColor = "rgb(245, 180, 180)";
                               break;
                               case 5:
                                   ball.style.backgroundColor = "rgb(245, 180, 180)";
                                   break;
                               case 6:
                               ball.style.backgroundColor = "rgb(247, 158, 158)";
                               break;
                               case 7:
                                   ball.style.backgroundColor = "rgb(247, 158, 158)";
                                   break;
                               case 8:
                               ball.style.backgroundColor = "rgb(243, 134, 134)";
                               break;
                               case 9:
                                   ball.style.backgroundColor = "rgb(243, 134, 134)";
                                   break;
                               case 10:
                               ball.style.backgroundColor = "rgb(239, 107, 107)";
                               ball.style.boxShadow = "3px 3px 35px red"
                               break;
                               default:
                                   ball.style.backgroundColor = "rgb(239, 107, 107)";
                       }
                     
                       const initialPositions = () => {
                           player1.style.top = "30%"
                           player2.style.top = "30%"
                           ball.style.top = "50%";
                           ball.style.left = "50%"
                           wayAngle = 1;
                           speedScore = 0;
                           ball.style.boxShadow = "none";

                     
                       }
                     
                      let player2Mode = 1.8;
                           if(ballBounds.top > 210 && ballBounds.top < 550) {
                              
                                   player2.style.top  = ballBounds.top-200+"px";
                               }
                     
       
                           const toTopRight = () => {
       
                              ball.style.left = ballLeft+1*wayAngle+"px";
                              ball.style.top = ballTop-1*wayAngle+"px";
                                }    
                           const toBottomRight = () => {
                               ball.style.left = ballLeft+1*wayAngle+"px";
                               ball.style.top = ballTop+1*wayAngle+"px";
                           }   
                           const toTopLeft = () => {
                               ball.style.left = ballLeft-1*wayAngle+"px";
                               ball.style.top = ballTop-1*wayAngle+"px";
                           }   
                           const toBottomLeft = () =>  {
                              ball.style.left = ballLeft-1*wayAngle+"px";
                              ball.style.top = ballTop+1*wayAngle+"px";
                            
                           }            
       
                           if(wayY=='top' && wayX =='right') {
                               toTopRight();
                          
                           } 
                           if (wayY =='bottom' && wayX =='right'){
                               toBottomRight();
                           }
                           if (wayY =='top' && wayX == 'left') {
                               toTopLeft();
                           }
                           if(wayY == 'bottom' && wayX =='left') {
                               toBottomLeft();
                            }
       
                           if(ballBounds.top < gameTableBounds.top+5 && wayX == 'right') {
                               wayX = 'right'
                               wayY = 'bottom'
                               toBottomLeft();
                               wallEffect.play();
                               
                              
                           }
                           if(ballBounds.top < gameTableBounds.top+5 && wayX == 'left') {
                               wayX = 'left';
                               wayY = 'bottom';
                               toBottomLeft();
                               wallEffect.play();
                               
                           } 
                           if (ballBounds.bottom > gameTableBounds.bottom - 5 && wayX == 'right')  {
                               wayX = 'right';
                               wayY = 'top';
                               toTopRight();
                               wallEffect.play();
                           }
                           if (ballBounds.bottom > gameTableBounds.bottom - 5 && wayX == 'left')  {
                               wayX = 'left';
                               wayY = 'top';
                               toTopLeft();
                               wallEffect.play();
                           }
                          
                          
                          if(player1Bounds.left>= ballBounds.left && player1Bounds.top <= ballBounds.top && player1Bounds.top +150 >= ballBounds.top && wayY == 'top') {
                             
                           let nwY = Math.floor(Math.random()*2);
                           let newWayY = nwY?'top':'bottom';
       
                        
                           if(newWayY == 'top') {
                               wayY = 'top';
                               wayX = 'right';
                               toTopRight();
                           }
                           if(newWayY == 'bottom') {
                               wayY = 'bottom';
                               wayX = 'right';
                               toBottomRight();
                           }
                           wayAngle+=0.1;
                           speedScore++;
                           hitEffect.play();
                           
                             
                           }
                           if(player1Bounds.left >= ballBounds.left && player1Bounds.top <= ballBounds.top && player1Bounds.top +150 >= ballBounds.top && wayY == 'bottom') {
                              
                               let nwY = Math.floor(Math.random()*2);
                               let newWayY = nwY?'top':'bottom';
           
                             
                               if(newWayY == 'top') {
                                   wayY = 'top';
                                   wayX = 'right';
                                   toTopRight();
                               }
                               if(newWayY == 'bottom') {
                                   wayY = 'bottom';
                                   wayX = 'right';
                                   toBottomRight();
                               }
                               wayAngle+=0.1;
                               speedScore++;
                               hitEffect.play();
                           }   
       
                           if(player2Bounds.right <= ballBounds.right && wayY == 'top') {
                               let nwY = Math.floor(Math.random()*2);
                               let newWayY = nwY?'top':'bottom';
           
                             
                               if(newWayY == 'top') {
                                   wayY = 'top';
                                   wayX = 'right';
                                   toTopRight();
                               }
                               if(newWayY == 'bottom') {
                                   wayY = 'bottom';
                                   wayX = 'right';
                                   toBottomRight();
                               }
                               wayAngle+=0.1;
                               speedScore++;
                               hitEffect.play();
                           } 
                           if(player2Bounds.right <= ballBounds.right && wayY == 'bottom') {
                               let nwY = Math.floor(Math.random()*2);
                               let newWayY = nwY?'top':'bottom';
           
                            
                               if(newWayY == 'top') {
                                   wayY = 'top';
                                   wayX = 'left';
                                   toTopLeft();
                               }
                               if(newWayY == 'bottom') {
                                   wayY = 'bottom';
                                   wayX = 'left';
                                   toBottomLeft();
                               }   
                               wayAngle+=0.1;
                               speedScore++;
                               hitEffect.play();
                       }
                           if (ballBounds.left <= gameTableBounds.left) {
                               p2score++;
                               player2score.innerHTML = p2score;
                               overEffect.play();
                              initialPositions();
                              roundValue = false;
                              console.log(roundValue)
                              
                           }
                           
                              
                 },1)   
                
                
               
             
     }
    

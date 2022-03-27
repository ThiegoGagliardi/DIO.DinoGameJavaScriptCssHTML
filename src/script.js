const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position  = 0;
let isJumping = false;

function handleKeyUp(event){

    if (event.keyCode === 32){
        if (!isJumping){
         
            jump();         
        } 
    }
}

function jump(){
        
    isJumping    = true;     
    let upInterval = setInterval(() =>{

        if (position >= 150){
            
            clearInterval(upInterval);
            
            let downInterval = setInterval(() =>{   
                if (position <= 2){
                   dino.style.bottom = 2;
                   clearInterval(downInterval);
                   isJumping    = false;    
                }
                else{
                    position -= 20;      
                    dino.style.bottom = position +'px';
                }  
                
            }, 20);
        } else {         

        position += 20;      
        dino.style.bottom = position +'px';
        }     
    }, 20);
}

function createCactus()
{
    const cactus = document.createElement("div");
    let cactusPositon = 1000;
    let randonTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000+'px';
    background.appendChild(cactus);
    
    let leftInterval = setInterval(() => {    

        if (cactusPositon < -60){
           clearInterval(leftInterval);
           background.removeChild(cactus);    
        } else if (cactusPositon > 0 && cactusPositon < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1 class='game_over'> Fim de jogo</h1>"
        } else{
            cactusPositon -= 10;
            cactus.style.left = cactusPositon+'px';
        }        
    },20);

    setTimeout(createCactus,randonTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

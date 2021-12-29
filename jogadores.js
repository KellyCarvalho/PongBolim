let atacante =[355,160,20,60,255,123,50,10];

let zagueiro =[141,160,20,60,255,123,50,10];

let atacanteRival =[225,160,20,60,100,50,130,10];

let forca =10;
let zagueiroRival =[430,160,20,60,100,50,130,10];

let totalJogadores =[atacante,zagueiro,atacanteRival,zagueiroRival];
let colisao = false;

function mostraJogador(x,y,comprimento,altura,r,g,b){
      fill(color(r,g,b));
      noStroke();
      rect(x,y,comprimento,altura,10);
    }

function movimentaJogador(){
  
     if(keyIsDown((UP_ARROW))){
    if(podeSeMoverParaCima(atacante[1])){
          
        atacante[1]-=forca;
  
        zagueiro[1]-=forca;
      }
      
    

  
   
      
     }
   if(keyIsDown((DOWN_ARROW))){
        if(podeSeMoverParaBaixo(atacante[1])){
          
        atacante[1]+=forca;
        zagueiro[1]+=forca;
      }
   
           
   
    }
 
}

function movimentaJogadorRival(){
  
    if(keyIsDown((87))){
      
      if(podeSeMoverParaCima(atacanteRival[1])){
          
        atacanteRival[1]-=forca;
  
        zagueiroRival[1]-=forca;
      }
      
    
  

     
  }
  
    if(keyIsDown((83))){
      
          if(podeSeMoverParaBaixo(atacanteRival[1])){
          
        atacanteRival[1]+=forca;
  
        zagueiroRival[1]+=forca;
      }
      
  
    }
  
   
  
   
  
 
      
}

 function colisaoJogadorBiblioteca(){
   for(let i=0;i<totalJogadores.length;i++){
         
       colidiu = collideRectCircle(totalJogadores[i][0], totalJogadores[i][1], totalJogadores[i][2],totalJogadores[i][3],  xBolinha, yBolinha, diametro);
     
    if(colidiu){
      invertBolinha();
    
       
  
    }
     
   }
 
  }


function invertBolinha(){
   velocidadeXBolinha*=-1;
  

}

function podeSeMoverParaCima(posicaoJogador){
  let verificarMovimento=false;

    
     if(posicaoJogador>=15){
       verificarMovimento=true;
     }
  
  
   
  
 
return verificarMovimento;
}

function podeSeMoverParaBaixo(posicaoJogador){
  let verificarMovimento=false;

    
     if(posicaoJogador<=320){
       verificarMovimento=true;
     }
 
  
  
 
return verificarMovimento;
}

function verificarColisaoY(y){
  if(yBolinha==y){
 
    return true;
  }
  
  
}

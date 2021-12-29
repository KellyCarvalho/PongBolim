let gol = [15,157,5,87];
let golAdversario = [581,157,5,87];
colisaoGol = false;
let comemorar ="É gooooooooooool";
let verificarSegundo=0;

function mostraGol(x,y,comprimento,altura){
   
      noStroke();
      rect(x,y,comprimento,altura);
    }



function meio(){


   xBolinha=300;
  yBolinha=200;

  
}


  
  function verificarColisaoGolOponente(){
     colisaoGol= collideRectCircle(golAdversario[0],golAdversario[1],golAdversario[2],golAdversario[3],xBolinha,yBolinha, raio);
    
    if(colisaoGol){
  
      meusPontos++;
      comemorarGol();
     meio();
      ponto.play();
   
      
       
      
   }
  
}

 function verificarColisaoGol(){
     colisao= collideRectCircle(gol[0],gol[1],gol[2],gol[3],xBolinha,yBolinha, raio);
    
    if(colisao){

      pontosOponente++;
     
   
        comemorarGol();
       meio();
      verificarSegundo=second()+23;
   
       ponto.play();
        
     
   }
  
}

function comemorarGol(){
if(contarSegundos){
  print(verificarSegundo);
    stroke(250)
   textAlign(CENTER);
   textSize(50);
    fill(color(255,140,0));
   rect(150,10,40,20);
   fill(color(255,140,0));
   rect(450,10,40,20);
  fill(255);
    text(comemorar,300,200);
   print(verificarSegundo);
 }
     
}

function contarSegundos(){
  while(verificarSegundo<second()){
    return true;
  }
  
}
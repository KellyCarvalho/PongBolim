let xBolinha=150,yBolinha=150, diametro=22;
let velocidadeXBolinha=5, velocidadeYBolinha=5, raio=diametro/2;


 
  function mostraBolinha(){
      fill(color(255,255,255));
     noStroke();
     circle(xBolinha,yBolinha,diametro);
  }
  
  function movimentaBolinha(){
    xBolinha+=velocidadeXBolinha;
  yBolinha+=velocidadeYBolinha;
  }
  
  function verificaColisaoBorda(){
     if(xBolinha+raio>width  
     ||xBolinha - raio<0&&colisaoGol==false){
    velocidadeXBolinha*=-1;
  }
  
  if(yBolinha+raio>height 
     ||yBolinha-raio<0&&colisaoGol==false){
     velocidadeYBolinha*=-1
  }
  
    
  }



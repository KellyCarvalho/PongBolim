




let meusPontos=0,pontosOponente=0;





function setup() {
   createCanvas(600, 400);
  comemorarGol();
 
  
   ;
 
  trilha.loop();
}

function draw() {
 
background(color(50,205,50));
   fill(255,0, 0);
 
   desenharCampo();
  desenharItensCampo();
 mostraBolinha();
 movimentaBolinha(); 
 verificaColisaoBorda();

  mostraGol(gol[0],gol[1],gol[2],gol[3]);
  mostraGol(golAdversario[0],golAdversario[1],golAdversario[2],golAdversario[3]);
  desenharItensCampo(areaGol[0] ,areaGol[1],areaGol[2],areaGol[3],areaGoleiro[0],areaGoleiro[1],areaGoleiro[2],areaGoleiro[3]);
  
   desenharItensCampo(areaGolAdversario [0] ,areaGolAdversario [1],areaGolAdversario [2],areaGol[3],areaGoleiroAdversario [0],areaGoleiroAdversario [1],areaGoleiroAdversario [2],areaGoleiroAdversario [3]);
  
  
  
 
 
  incluiPlacar(); 

 mostraJogador(atacante[0],atacante[1],atacante[2],atacante[3],atacante[4],atacante[5],atacante[6]);
  
   mostraJogador(atacanteRival[0],atacanteRival[1],atacanteRival[2],atacanteRival[3],atacanteRival[4],atacanteRival[5],atacanteRival[6]);
  
  
  mostraJogador(zagueiro[0],zagueiro[1],zagueiro[2],zagueiro[3],zagueiro[4],zagueiro[5],zagueiro[6]);
  
 
  mostraJogador(zagueiroRival[0],zagueiroRival[1],zagueiroRival[2],zagueiroRival[3],zagueiroRival[4],zagueiroRival[5],zagueiroRival[6]);
  
  movimentaJogador();
  
  movimentaJogadorRival();
  
 
  verificarColisaoGolOponente();
  
  verificarColisaoGol();
  
  colisaoJogadorBiblioteca();

 contarSegundos();
  }
  
 
  
 function incluiPlacar(){
      
   stroke(250)
   textAlign(CENTER);
   textSize(16);
    fill(color(255,140,0));
   rect(170,20,40,30);
   fill(color(255,140,0));
   rect(380,20,40,30);
  fill(255);
   noStroke();
    text(meusPontos,190,40);
   fill(255);
    text(pontosOponente,400,40);
  }
  
  
  

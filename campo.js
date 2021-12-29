let campo =[15,13,569,373];
let areaGol =[15,154,50,91];

let areaGoleiro =[15,115,94,169];


let areaGolAdversario =[535,154,50,91];

let areaGoleiroAdversario =[490,115,94,169];

function desenharCampo(){
   strokeWeight(4);
  stroke(color(255,255,255));
     fill(color(0,100,0));
    rect(campo[0],campo[1],campo[2],campo[3]);
}

function desenharItensCampo(xAreaGol,yAreaGol,wAreaGol,hAreaGol,xAreaGoleiro,yAreaGoleiro,wAreaGoleiro,hAreaGoleiro){
 
   strokeWeight(4);
    stroke(color(255,255,255));
 noFill();
  rect(xAreaGol,yAreaGol,wAreaGol,hAreaGol);
   noFill();
  rect(xAreaGoleiro,yAreaGoleiro,wAreaGoleiro,hAreaGoleiro);
  
  line(300, 15, 300, 385);
  
  circle(300, 200, 100);

  
  
 desenharArcos();
    

  
  



   
}

function desenharArcos(){
   arc(16, 13, 45, 45, 0, HALF_PI);
  arc(584, 13, 45, 45, HALF_PI, PI);
  arc(15, 385, 45, 45, 3*PI/2, 0);
  arc(583, 386, 45, 45, PI, 3*PI/2);
  
  
  
  
  
  
 arc(490, 200, 50, 70, HALF_PI, 3*PI/2);
  
   arc(109, 200, 50, 70, 3*PI/2, PI/2);
}



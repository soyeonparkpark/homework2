function setup() {
  createCanvas(600, 1000);
}


function printE(x, y) {
  line(x, y, x, y + 100);
  line(x, y, x + 40, y);
  line(x, y + 50, x + 40, y + 50);
  line(x, y + 100, x + 40, y + 100);
}

function printI (x,y){
 
  
  line(x+20,y,x+20,y+100);
  line(x,y,x+40,y);
 
    line(x,y+100,x+40,y+100);
}


function printL(x,y){    
 
   line(x,y,x,y+100);
   line(x,y+100,x+40,y+100);
}

function printM(x,y){
  
  
  line(x+50,y,x+50,y+100);
  line(x+50,y,x,y+100);
   line(x+100,y,x+50,y+100);
  line(x+100,y,x+100,y+100);
  
  
}



  function printS(x,y){
  
  line(x,y,x,y+50);
  line(x,y,x+40,y);
 
  line(x+40,y+50,x+40,y+100);
  line(x+40,y,x+40,y+30);
  line(x,y+50,x+40,y+50);
  line(x,y+100,x+40,y+100);
    line(x,y+100,x,y+70);
}



 function draw() {
  background(220);
     printS(50,100);
   printM(120,100);
   printI(260,100);  
    printL(350,100);
  printE(450,100);
  
}


function myLine (x1, y1, x2, y2)
{
  // insert your code here to draw a line from (x1, y1) to (x2, y2) 
  // using only calls to point().
  
  // your code should implement the Midpoint algorithm
  let dE, dNE,d;
  let dy = y2-y1;
  let dx = x2-x1;
  dE = 2*dy;
  dNE = 2*(dy-dx);
  d = dE - dx;

  for(let x = x1, y = y1; x<=x2; ++x){
    point(x,y);
    if(d<=0){
      d+=dE;
    }else{
      ++y;
      d+=dNE;
    }
  }
}

//first point p(x0,y0), second point p(x1,y1) other point p(x,y)
function edgeFunc(x0,y0,x1, y1, x,y){

  edge = (x-x0)*(y1-y0)-(y-y0)*(x1-x0)
  return edge
}

function myTriangle (x0, y0, x1, y1, x2, y2)
{
  // insert your code here to draw a triangle with vertices (x0, y0), (x1, y1) and (x2, y2) 
  // using only calls to point().
  // stroke(0,0,0);

  
  var LE = Array(500).fill(0);
  var RE = Array(500).fill(500)

  for(let y=0;y<500;y++){
    for(let x=LE[y];x<RE[y];x++){
      if(edgeFunc(x0,y0,x1,y1,x,y) >= 0 && edgeFunc(x1,y1,x2,y2,x,y) >= 0 && edgeFunc(x2,y2,x0,y0,x,y) >= 0){
        point(x,y);
      }
    }
  }
  



  // your code should implement the the algorithm presented in the video
}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

let doMine;
let scene;
let backgroundColor;

function setup () 
{
  createCanvas (500, 500);
  doMine = true;
  scene = 1;
  backgroundColor = color (150, 150, 150);
  background (backgroundColor);
}

function draw ()
{
  fill (0,0,0);
    if (doMine) text ("my solution", 20, 475);
    else text ("reference", 20, 475);
    
  if (scene == 1) doLines();
  if (scene == 2) doHouse();
  
}

function doHouse()
{
  if (!doMine) {
    fill (255, 0, 0);
    stroke (255,0,0);
    triangle (200, 300, 300, 200, 200, 200);
    triangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 255);
    stroke (0,0,255);
    triangle (200,200, 300, 200, 250, 150);
    stroke (0,255,0);
    fill (0,255,0);
    triangle (250, 300, 275, 300, 250, 250);
    triangle (275, 300, 275, 250, 250, 250);
  }
  else {
    fill (128, 0, 0);
    stroke (128,0,0);
    myTriangle (200, 300, 300, 200, 200, 200);
    myTriangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 128);
    stroke (0,0,128);
    myTriangle (200,200, 300, 200, 250, 150);
    stroke (0,128,0);
    fill (0,128,0);
    myTriangle (250, 300, 275, 300, 250, 250);
    myTriangle (275, 300, 275, 250, 250, 250);
  }
}

function doLines()
{
  if  (!doMine) {
    stroke (255, 255, 255);
    line (50, 250, 450, 250);
    line (250, 50, 250, 450);
    line (50, 450, 450, 50);
    line (50, 50, 450, 450);
  }
  else {
    stroke (0, 0, 0);
    myLine (50, 250, 450, 250);
    myLine (250, 50, 250, 450);
    myLine (50, 450, 450, 50);
    myLine (50, 50, 450, 450);
  }
}

function keyPressed()
{
  if (key == '1') 
  {
    background (backgroundColor);
    scene = 1;
  }
  
  if (key == '2') 
  {
    background (backgroundColor);
    scene = 2;
  }
  
  if (key == 'm') 
  {
    background (backgroundColor);
    doMine = !doMine;
  }
}
var myWinwidth;
var myWinheight;
function setup(){
    // create the canvas
    var cnv = createCanvas(800,1000);
    cnv.parent("windows");



    // setting my wdith and height for the window.
    myWinwidth = 100;
    myWinheight = 200;

    var colWidth = 150;
    var rowHeight = 240;
    var x =20;
    var y =20;

    for(var i = 0; i<30; i++){
         drawWindow(x,y);
         x += colWidth;

        if(x > width - myWinwidth){
            x = 20;
            y+= rowHeight;
        }

    }


}

function drawWindow(startX, startY){

    fill('cyan');
    rect(startX, startY,myWinwidth,myWinheight);

    // vertical line
    stroke('black');
    var x1, x2, y1,y2;
    x1=startX + myWinwidth/2;
    y1=startY;
    x2=startX + myWinwidth/2;
    y2=startY + myWinheight;
    line(x1,y1, x2,y2  );


    //horizontal line
    x1=startX;
    y1=startY + myWinheight/2;
    x2=startX + myWinwidth;
    y2=startY + myWinheight/2;
    line(x1,y1, x2,y2  );





}

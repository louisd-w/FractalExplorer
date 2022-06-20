var canvas;
var ctx;

var slider;
var sliderValue;
var slider2;
var sliderValue2;

var info;
var grid;


function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    slider = document.getElementById("slider");
    sliderValue = document.getElementById("value");
    sliderValue.innerHTML = "size: " + slider.value;
    slider.oninput = function(){sliderValue.innerHTML = "size: " + slider.value;}

    slider2 = document.getElementById("slider2");
    sliderValue2 = document.getElementById("value2");
    sliderValue2.innerHTML = "depth: " + slider2.value;
    slider2.oninput = function(){sliderValue2.innerHTML = "depth: " + slider2.value;}

    info = document.getElementById("info");

    grid = new Array(canvas.width);
    
    for(i=0;i<canvas.width;i++)
    {
        grid[i] = new Array(canvas.height);
    }

}

class C
    {
        Cre = 0;
        Cim = 0;
       
        Zre = 0;
        Zim = 0;

        Zretemp = 0;
    
        mod = 0;
        diverged = false;

        constructor(w,h)
        {
            this.Cre = -2 + w/divisor;
            this.Cim = -1 + (canvas.height-h)/divisor;
        }

        iterate()
        {
            this.ZreTemp = this.Zre;
       
            this.Zre = (this.Zre)**2-(this.Zim)**2 + this.Cre;
            this.Zim = 2 * this.ZreTemp * this.Zim + this.Cim;
       
            this.mod = Math.sqrt(this.Zre**2 + this.Zim**2);
            
            if(this.mod > 2)
            {
                this.diverged = true;

                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.rect(w,h,1,1);
                ctx.stroke();
            }
    
        }
    }




function start()
{
    canvas.height = slider.value;
    canvas.width = canvas.height * 1.5;

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect(0,0,canvas.height,canvas.width);
    ctx.stroke();
   
    divisor = canvas.width/3;
    depth = slider2.value;
   
    setInterval(main, 10);
}

function main()
{
    for(w=0;w<canvas.width;w++)
    {
        grid[w] = [];
        for(h=0;h<canvas.height;h++)
        {
            grid[w][h] = new C(w,h);
        }
    }
    
    for(w=0;w<canvas.width;w++)
    {
        for(h=0;h<canvas.height;h++)
        {
            if(grid[w][h] != grid[w][h].diverged)
            {
                grid[w][h].iterate();
            }
        }
    }

    

}




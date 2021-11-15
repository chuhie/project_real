 
  click.onclick = function(){
   
    var a = ["./img2/A","./img2/B","./img2/C","./img2/D","./img2/E","./img2/F","./img2/G","./img2/H","./img2/I","./img2/J","./img2/K","./img2/L","./img2/M","./img2/N","./img2/O","./img2/P"];
    
    for(var i=0; i<40; i++){
    
    var t = document.createElement("img");
    t.src = a[randomgraphic(0,14)]+".png";
    t.className = "img_1";
    t.style.zIndex = "1";
    t.style.width = randomgraphic(150,150)+"px";
    t.style.height = "auto";
    t.style.transform = 
    t.style.left = Math.random()*screen.availWidth+"px";
    t.style.top = Math.random()*screen.availWidth+"px";
    document.body.appendChild(t);
    }
    
    


function randomgraphic(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}


setTimeout("location.href='end.html'",30000);

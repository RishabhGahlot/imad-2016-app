console.log('Loaded!');
var img = document.getElementById("fotu");
var marginleft=0;
function moveRight(){
    marginleft = marginleft + 10 ;
    img.style.marginLeft = marginleft + 'px' ;
    
}
var margintop = 0;
function movedown(){
    margintop = margintop + 10 ;
    img.style.marginBottom=margintop +'px'
;   
}
img.onclick = function(){
    var interval = setInterval (moveRight,50);
    var interval2 = setInterval (movedown,50);
};
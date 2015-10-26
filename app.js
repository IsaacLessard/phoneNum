
function lpn(){
    
    var strng = [];
    var compa = [];
    var keep = [];
    for (i = 0; i < arguments.length; i++){
        strng[i] = arguments[i] + '';
        var splt = strng[i].split("").map(Number).filter(Boolean);
        
         var sum1= 0;
    for(var a in splt) { sum1 += splt[a]; }
    compa[i] = sum1;
}
    var b = compa.lastIndexOf(Math.max.apply(Math, compa));
    console.log(arguments[b]);
}


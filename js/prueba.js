var colors =[ 
    "rgb(253, 130, 6)",
    "rgb(250, 252, 251)",
    "rgb(252, 186, 3)",
    "rgb(41, 148, 128)",
    "rgb(165, 83, 207)",
    "rgb(104, 166, 120)",
]
var square = document.querySelectorAll (".square"),

    for ( var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors [i];
        
    }
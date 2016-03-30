var y = prompt('Enter a number.');





for (var x = 1; x <= y; x++){
    if (x%3 == 0 && x%5==0){
        document.write ("ping-pong!</br>");
    }
    else if (x%3 == 0){
        document.write ("ping!</br>");
    }
    else if (x%5==0){
        document.write ("pong!</br>");
    }
    else {
        document.write (x+"</br>");
    }
}
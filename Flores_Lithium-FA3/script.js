function rndom(){
    var num1 = parseInt(Math.random()*20)+1;
    document.getElementById("strb").innerHTML = num1;
    var num2 = parseInt(Math.random()*20)+1;
    document.getElementById("vnl").innerHTML = num2;
    var num3 = parseInt(Math.random()*20)+1;
    document.getElementById("conc").innerHTML = num3;

    if (num1 > num2 && num1 > num3) {
        document.getElementById("most").innerHTML = "Strawberry, with " + num1 + " votes";
    } 

    else if (num2 > num1 && num2 > num3) {
        document.getElementById("most").innerHTML = "Vanilla, with " + num2 + " votes";
    } 

    else if (num3 > num1 && num3 > num2) {
        document.getElementById("most").innerHTML = "Cookies 'n Cream, with " + num3 + ") votes";
    } 

    else if (num1 === num2) {
        document.getElementById("most").innerHTML = "Strawberry, Vanilla (" + num1 + ")";
    } 

     else if (num2 === num3) {
        document.getElementById("most").innerHTML = "Vanilla, Cookies 'n Cream (" + num2 + ")";
    }

    else if (num1 === num3) {
        document.getElementById("most").innerHTML = "Strawberry, Cookies 'n Cream(" + num1 + ")";
    } 



    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    document.getElementById("name").innerHTML = alphabet[randomIndex];

    var tmins = num2*num3;
    document.getElementById("tmins").innerHTML = "(" + tmins + " mins)";
    var hrs = Math.floor(tmins / 60);
    var mins = tmins % 60;
    document.getElementById("hours").innerHTML = hrs + "hr ";
    document.getElementById("mins").innerHTML = mins + "min";
}
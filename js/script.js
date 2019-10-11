var message = null;
var gifImage = document.createElement("IMG");
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var month = d.getMonth(); // return month as a number 0-11
var months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
var payDay = document.getElementById("PayDay");


var is_weekend =  function(d){
    return d.getDay() == 6 || d.getDay() == 0;
}



if (!is_weekend(d) && today == 11) {
    message = "Vaistinu je legla! najradosniji srpski praznik : ) \n\n\n";
    gifImage.id = "Id";
    gifImage.className = "class";
    gifImage.src = "https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif";
}

// If not...

else {
    message = "Cvrc. Danas nije Spasovdan :(";
}

// Defining the proper ordinalIndicator for today's date


var datemessage = ("Danas je " + today + "  " + months[month] + ". "); // months[month] displays today's date

// Display message

payDay.innerText = datemessage + message ;
payDay.appendChild(gifImage) ;
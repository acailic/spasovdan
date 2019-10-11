var message = null;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var month = d.getMonth(); // return month as a number 0-11
var months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
var payDay = document.getElementById("PayDay");

// Is today's date the 15 or the 30th? If yes...

if ( today == 1 || today == 11 ) {
	message = "Vaistinu je legla! najradosniji srpski praznik : )";
}

// If not...

else {
	message = "Cvrc. Danas nije Spasovdan :(";
}

// Defining the proper ordinalIndicator for today's date


var datemessage = ("Danas je " + today + "  " + months[month] + ". "); // months[month] displays today's date

// Display message

payDay.innerText = datemessage + message;
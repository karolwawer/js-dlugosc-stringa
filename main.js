var string1 = "Uwielbiam JavaScript";
var string2 = "Jestem świetnym programistą";
function dlugoscStringa(string1, string2) {
    if (string1.length > string2.length) {
        console.log(string1);
    } else if (string2.length > string1.length) {
        console.log(string2);
    } else {
        console.log("stringi są tej samej długości")
    }
    
} dlugoscStringa(string1, string2);
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW



// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance

$(document).ready(function() {
     var wordCounts = {}; 
     $("#userInput").keyup(function() {
         var matches = this.value.match(/\b/g);
         wordCounts[this.id] = matches ? matches.length / 2 : 0;
         var finalCount = 0; 
         $.each(wordCounts, function(k, v) {
             finalCount += v; 
         });
         $('#display_count').html(finalCount);
             am_cal(finalCount);
     }).keyup();
}); 



$(document).ready(function() { 
    $("#translate").click(function () { // Creates click handler for the "Latinizer" button. 
         var userInput = $("#userInput").val(); // Takes the users input and places it in a variable
         var pigLatin = pigLatinizer(userInput); // Takes the users input and connects it to the pigLatinizer(word) func whereas "word" is the usersinput. 
         $("#translation").html(pigLatin); // This allows the usersinput to be displayed on the screen
     });    
});
 

function pigLatinizer(word) { 
     var vowels =["a", "e", "i", "o", "u"]; 
     var firstLetter = word[0]; // Takes the first letter of the usersinput and places it in a variable 
     var indexOf = vowels.indexOf(firstLetter); // This checks the usersinput to see if the first letter begins with a vowel 
     var beginsWithVowel = indexOf > -1; // This creates the conditional for the first letter
     //word = word.slice(1); //Caution
     if(beginsWithVowel) { 
         return word + "yay";
     } else { 
         return word + "ay";
         // Here edit the code so that if the word dosn't begin with vowel, then the first letter will be appended to the end of the word. 
     } 
}

// function ToPigLatin() { 
//       pigLatin.split("");  
// } 

// If hello is placed in the input field, then the output will be "helloay"
// Else, if apple is placed in the input field, then the output will be "appleyay" 

var letters = word.slice(""); // Slices the usersinput into an array  
var firstLetter2 = letters[0]; // Takes the first letter of the usersinput 


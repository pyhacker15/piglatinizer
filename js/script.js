function sentenceToPigLatin( sentence ) {
	var words = sentence.split( " " );
	var answers = [];
	for ( var i = 0; i < words.length; i++ ) {
		answers.push( pigLatinizer( words[ i ] ) );
	}
	return answers.join( " " );
}       

function sentenceToEnglish( sentence ) {
	var words = sentence.split( " " );
	var answers = [];
	for ( var i = 0; i < words.length; i++ ) {
		answers.push( englishConverter( words[ i ] ) );
	}
	return answers.join( " " );
}

$( document ).ready( function() {
	$( "#translateButton" ).click( function() {
		var userInput = $( "#userInput" ).val();
		var pigLatin = sentenceToPigLatin( userInput.toLocaleLowerCase( 1 ) );
		$( "#userOutput" ).val( pigLatin );
		$( "#userInput" ).val( " " );
	} );

	$( "#convertButton" ).click( function() {
		var output = sentenceToEnglish( $( "#userOutput" ).val() );
		$( "#userInput" ).val( output );
		$( "#userOutput" ).val( " " );
	} );

	var wordCounts = {};
	$( "#userInput" ).keyup( function() {
		var matches = this.value.match( /\b/g );
		wordCounts[ this.id ] = matches ? matches.length / 2 : 0;
		var finalCount = 0;
		$.each( wordCounts, function( k, v ) {
			finalCount += v;
		} );
		$( '#display_count' ).html( finalCount );
	} ).keyup();

	var wordCounts1 = {};
	$( "#userOutput" ).keyup( function() {
		var matches = this.value.match( /\b/g );
		wordCounts1[ this.id ] = matches ? matches.length / 2 : 0;
		var finalCount = 0;
		$.each( wordCounts1, function( k, v ) {
			finalCount += v;
		} );
		$( '#display_count2' ).html( finalCount );
	} ).keyup();
} );


function pigLatinizer( word ) {
	var vowels = [ "a", "e", "i", "o", "u" ];
	var firstLetter = word[ 0 ];
	var indexOf = vowels.indexOf( firstLetter );
	var beginsWithVowel = indexOf > -1;
	if ( beginsWithVowel ) {
		return word + "yay";
	} else {
		word = word.slice( 1 );
		return word + firstLetter + "ay";
	}
}

function englishConverter( word ) {
	if ( word.slice( word.length - 3 ) !== "yay" ) {
		var slicedWord = word.slice( 0, word.length - 2 );
		var lastLetter = slicedWord[ slicedWord.length - 1 ];
		var rest = slicedWord.slice( 0, slicedWord.length - 1 );
		return lastLetter.concat( rest );
	} else {
		return word.slice( 0, word.length - 3 );
	}
}
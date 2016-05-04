/*
  NumbersAndStrings.js

  Reads user input. If numeric, computes and displays basic statistics.
  Otherwise concatenates strings.
*/

(function() {
'use strict';
//=============================================================================

var count = 0;
var sum = 0;
var average;
var concatenatedString = '';
var wordCounts = {};
    //IMPORTANT - these are global variables. other variables that are declared within functions are LOCAL ONLY to that function!

DisplayResults( );

$('#submit').on( 'click', processForm );
$('#reset').on( 'click', reset );
$('#user-input').on( 'focus', clearInput );

//=============================================================================

function processForm( evt ) {
    var val = $('#user-input').val();//this jquery takes CSS type selectors and gets you that value. typical jquery. local variable!
    var num = +val;//this += forces it to be a number. if it can't the resultant output is "NaN". very important that this step occurs right before next one. local variable!
    if ( isNaN( num ) ) {//if the value of num being passed at this point is "NaN", then proceed with processString
        processString( val );
    } else {
        processNumber( num );//and if it's not a string, then run processNumber
    }
    evt.preventDefault( );//prevent form submission and form reset
}

//=============================================================================

function processString( string ) {//concatenation just adds successive entries together. note that string is just a name for the value being worked here. "string" is just a nickname within this function. not any other external thing called "string"
    concatenatedString += string += " ";//concatenatedstring is string added to itself. makes sense for adding successive input
    updateWordCounts( string );
    DisplayResults( );
}

//=============================================================================

function updateWordCounts( string ) {
    var words = string.split( /\s/ ); //split on whitespace (Could use ' '). Remember that words is a LOCAL variable
    words.forEach( function( word ) {
        word = word.toLowerCase();
        word = word.replace( /\W/, '' ); //remove non-word characters
        if ( word.length === 0 ) {
            return;
        }
        if ( wordCounts[ word ] === undefined ) {
            wordCounts[ word ] = 1;
        } else {
            ++wordCounts[ word ];//make wordcounts bigger by 1
        }
    } );
}

//=============================================================================

function processNumber( number ) {
    ++count;//means make the count bigger by 1
    sum += number;//+= adds sum to number
    if ( count > 0 ) {//count < 0 means "if the number of numbers is greater than zero, meaning we have at least one number
        average = sum / count;//then get the average of the numbers entered with this simple formula
    } else {//if you're dealing with 0, then it's undefined, but that'll never happen because you have to have a number in place to call the function processNumber. 
        average = undefined;
    }
    DisplayResults( );//note how this next funtion is being called up at the end of this preceding function. look below. we're proceeding right down the line.
}

//=============================================================================

function DisplayResults( ) {
    displayValue( '#count', count );//put the values inside each of these HTML elements with these tags
    displayValue( '#sum', sum );
    displayValue( '#average', average );
    displayValue( '#concatenation', concatenatedString );
    displayWordCounts( );

    //-------------------------------------------------------------------------

    function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }
}

//=============================================================================

function displayWordCounts( ) {
    var words = Object.keys( wordCounts );
    var tr, td;

    words.sort( function( word1, word2 ) {
        //Sort in descending order by count
        return wordCounts[ word2 ] - wordCounts[ word1 ];
    } );

    $('#word-counts').empty( );
    words.forEach( function( word ) {
        tr = $( '<tr>' );

        td = $( '<td>' );
        td.text( word );
        tr.append( td );

        td = $( '<td>' );
        td.text( wordCounts[ word ] );
        tr.append( td );

        $('#word-counts').append( tr );
    } );
}

//=============================================================================

function reset( ) {
    count = 0;
    sum = 0;
    average = undefined;
    concatenatedString = '';
    wordCounts = {};
    DisplayResults( );
}

//=============================================================================

function clearInput( ) {
    $('#user-input').val( '' );
}

//=============================================================================
})();
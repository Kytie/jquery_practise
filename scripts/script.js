// Runs when pictures and other page content has loaded
window.onload = function(){
    //alert("Window Loaded!");
};

// Runs when the DOM has loaded
$(document).ready(function(){
    selectors();
    DOMManipulation();
});

function DOMManipulation(){
    // Grab title attribute from element with ID of "eachloop".
    var val = $('#eachloop').attr('title');
    // Loop over each div in "eachloop".
    $('#eachloop div').each(function(index, element){
        // Change div element's text to be its index.
        $(element).html('ELEMENT: ' + index);
        // add a title attribute to each div and make it the same as the title from eachloop.
        $(element).attr('title', val);
        // Use json to add new style and ID information.
        $(element).attr({
            style:'border:2px solid black',
            id:'childElement'
        });
    });

    // Append new html element to changeme.
    $('#changeme').append('<div id="changeme3">3</div>');

    // Append newly created element to changeme.
    $('<div id="chnageme4">4</div>').appendTo('#changeme');

    // Add new html element above all other elements in changeme.
    $('#changeme').prepend('<div id="changeme2">2</div>');

    // Add newly created element above all other elements in changeme.
    $('<div id="changeme1">1</div>').prependTo('#changeme');

    // Remove element with ID "removeme".
    $('#removeme').remove();

    // Wraps a newly created div element around another element.
    $('#state').wrap('<div title="US STATE"></div>');

    // Use json to change css style information.
    $('#removemespace div').css({
        'color':'red',
        'font-weight':'bold'
    });

    $('#class').addClass('classOne');
    $('#class').addClass('classTwo classThree');
    if($('#class').hasClass('classOne')){
        $('#class').append('<div id="childClassDiv">classOne</div>');
        $('#childClassDiv').addClass('classTwo classThree');
    }
    $('#childClassDiv').removeClass();
    $('#childClassDiv').addClass('classFour classFive');
    $('#childClassDiv').toggleClass('classFour');

};

function selectors(){
    // Specify the myContent div ID and change its contents.
    $('#myContent').html('My ID');

    //Specify the myClass class in the document and change every occurence's contents.
    $('.myClass').html('My Class');

    //Specify the myClass paragraph class and change its contents.
    $('p.myClass').html('My Paragraph Class');

    // Find first p tag and change its contents.
    $($('p')[0]).html('Paragraph');

    //does the same as above but is not a jquery object and instead a HTML DOM Property.
    $('p')[0].innerHTML = "My Paragraph";

    // Find p tag that has a span child node and change its contents.
    $('p span').html('My Paragraph span');

    // Returns a collection of p tags and then allows you to manipulate the css of all of them.
    $('p').css("font-family", "Lucida Console");

    // Does the same as above but uses a foreach loop.
    $('div').each(function(){
        $(this).css("font-family", "Lucida Console");
    });

    // Find all instaces of an element with a title attribute and then change its text.
    $('a[title]').html('title');

    // Find all instances of an element with a title attribute that says "my title" and then change its text.
    $('a[title="my title2"]').html('title2');

    // Find all instances of an input element then change its text.
    $(':input').val("Some input text.");

    // Find all instances of an input element of type button then change its text.
    $(':input[type=button]').val("Some button");

    // Find all instances of a paragraph element containing the text "pluralsight" then change its text.
    $('p:contains("pluralsight")').html("Training");

    // Find the first child of a div element that is also a paragraph then change its text.
    $('div p:first-child').html('FIRST CHILD');

    // Find all instances of an element with a title attribute that ends with "attr" and then change its text.
    $('p[title$="attr"]').html("some text");

    // Find all instances of an element with a title attribute that starts with "some" and then change its text.
    $('p[title^="some"]').html("some new text");

    // Find all instances of an element with a title attribute that contains "dog" and then change its text.
    $('p[title*="dog"]').html("some random text");
};

$(document).ready(function(){
    //HandleEventOldWay();
    Click();
    Change();
    Mouse();
    Binding();
    Hover();
});

function Click(){
    /* clicks can be nested. otherID's click would trigger myID's click event.
    $('#otherID').click(function(){
        $'#myID'.click();
    })
    */
    
    $('#SubmitButton').click(function(){
        var name = $('#NameTextBox').val();
        $('#output').text('Thank You ' + name);
    });
};

function Change(){
    $('#SexSelector').change(function(){
        $('#output').text($(this).val());
    })

    // This will change when you mouse out of the text box.
    $('#NameTextBox').change(function(){
        $('#output').text($(this).val());
    })
};

function Mouse(){
    $('#SubmitButton').mouseenter(function(){
        $(this).css('cursor', 'pointer');
    })
    .mouseleave(function(){
        $(this).css('cursor', 'alias');
    });

    $('#NameTextBox').mouseup(function(e){
        $(this).attr('value', '');
        $('#output').text($(e.target).attr('id'));
    });

};

function Binding(){
    // on is the core event handler behind the scenes. Other calls are syntactic sugar.
    // on either, click or mouse over.
    $('#NameTextBox').on('click mouseover', function(){
        $(this).css('background-color', 'yellow')
    });

    // Set these events to work on an input element.
    /*$('#NameTextBox').on('click mouseover', 'input', function(){
        $(this).css('background-color', 'yellow')
    });*/

    /* Multiple mappings.
    $('#SubmitButton').on({
        mouseenter(function(){
        $(this).css('cursor', 'pointer');
    },
        mouseleave(function(){
        $(this).css('cursor', 'alias');
    }});
    */

    // Removes all events from an element.
    //$('#NameTextBox').off()
    //$('#NameTextBox').off('click')

    /*live() is removed in JQuery 1.9.
    //Attaches handler.
    $('.someClass').live('click', someFunction);
    // Detatches handler.
    $('.someClass').die('click', someFunction);
    */

    // Element with ID divs will handle bubble up events from any child with someClass class.
    //$('#divs').delegate('.someClass', 'click', someFunction);

};

function Hover(){
    //mover over and move away are both handled by the hover function.
    $('#SubmitButton').hover(
        function(){
            // Move Over
            $('#myDiv').css('background-color', 'red');
        },
        function (){
            // Move away
            $('#myDiv').css('background-color', 'white');
        }
    );

    /*This removed 1.9
    $('#SubmitButton').toggle(
        function(){
            // click on
            $('#myDiv').css('background-color', 'blue');
        },
        function (){
            // click on
            $('#myDiv').css('background-color', 'white');
        }
    );*/
};

function HandleEventOldWay(){
    var button = document.getElementById('SubmitButton');
    if(document.addEventListener){
        button.addEventListener('click', function(){ $('#output').html('Submitted')}, false);
    }
    else{
        button.attachEvent('onclick', function(){ $('#output').html('Submitted')});
    }
};

// Old way on intercepting click events.
// There will be a onclick="SubmitButton_Click()" in html page.
function SubmitButton_Click(){
    $('#output').html('Submitted');
};

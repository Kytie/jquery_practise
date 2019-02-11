$(document).ready(function(){
    $('#HelpButton').click(function(){
        $('#MyDiv').load('partial_content.html');
    });

    $.get('partial_content.html', function(data){
        $('#MyDiv2').html(data);
    });

    /*$.post('partial_content.html', data, function(data){
       $('#MyDiv2').html(data);
    });
    */

    // ajax() function provides extra control over making Ajax calls to a server.
});

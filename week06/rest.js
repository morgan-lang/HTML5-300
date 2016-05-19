function showInput() {
    var message_entered =  document.getElementById("text_input").value;

    document.getElementById('text_output').innerHTML = message_entered;
}

    
function check() {
  
  var checkbutton01 =
  $.ajax( 'https://shielded-sea-3725.herokuapp.com/data-api/danderson',
    {
        method: 'GET',
        data: {
                  skip: 1,
                  limit: 2
              },
        success: function logListResult( data ) {
            console.log( 'Data received:', data );
        },
        error: logAjaxError
    } );

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}
    var checkbutton =
    document.getElementById("check_input").value;

    document.getElementById('check_output').innerHTML = checkbutton01;
  
  
}
    
function showcolor() {
    var selectedcolor =
    document.getElementById("color_input").value;

    document.getElementById('color_output').innerHTML = selectedcolor;
}
    
function showrange() {
    var selectedrange =
    document.getElementById("range_input").value;

    document.getElementById('range_output').innerHTML = selectedrange;
}
    
function showselect() {
    var selectedselect =
    document.getElementById("select_input").value;

    document.getElementById('select_output').innerHTML = selectedselect;
}
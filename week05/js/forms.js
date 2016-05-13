function showInput() {
    var message_entered =  document.getElementById("text_input").value;

    document.getElementById('text_output').innerHTML = message_entered;
}

    
function check() {
    var checkbutton =
    document.getElementById("check_input").value;

    document.getElementById('check_output').innerHTML = checkbutton;
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

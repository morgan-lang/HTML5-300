function getcurrentrecords() {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'mlang'; 

    $.ajax( baseUrl + collection + '/',
    {
        method: 'GET',
        success: function logListResult( data ) {
            console.log( 'Data received:', data );
           document.getElementById('thisp').innerHTML = ( 'Data received:', data );
        },
        error: logAjaxError
    } );
}



function createnameage(){

    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'mlang'; 
    var name = $('#create-name').val();
    var age = $('#create-age').val();

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  name: name,
                  age: age
              },
        success: logCreateResult,
        error: logAjaxError
    } );
    }



function getrecordbyid(){
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'mlang'; 
    var id = $('#read-id').val();


    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'GET',
        success: logReadResult,
        error: logAjaxError
    } );
    }

function logCreateResult( data ) {
    console.log( 'Data received:', data );
    document.getElementById('thatp').innerHTML = ( 'Data received:', data );
}

function logReadResult( data ) {
    console.log( 'Data received:', data );
    document.getElementById('theotherp').innerHTML = ( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
    }

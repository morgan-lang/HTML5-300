function addRow() {
  var siteName = document.getElementById("sitename");
  var siteDescription = document.getElementById("sitedescription");
  var siteURL = document.getElementById("url");
  var table = document.getElementById("addedsites");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  row.insertCell(0).innerHTML= siteName.value;
  row.insertCell(1).innerHTML= siteDescription.value;
  row.insertCell(2).innerHTML= siteURL.value;

}

function hidePageElement(what)  {  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    obj.style.display = 'none';  
    return false;  
} 


function hideListOfSites() {
  hidePageElement(document.getElementById('listofsites'))
}

function hideInputForm() {
  hidePageElement(document.getElementById('inputform'))
}

function showPageElement(what)  {  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
  
    obj.style.display = 'block';  
    return false;  
} 

function deleteRow() {
  document.getElementById("addedsites").deleteRow(1);
}

function reloadPage() {
    window.location.reload();
}
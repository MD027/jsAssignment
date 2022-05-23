function myFunction() {
    var hr=parseInt(document.getElementById("headsratio").value);
    var o=parseInt(document.getElementById("inputnumber").value);
    document.getElementById("output").innerHTML = headsRatio(o,hr);

}
function headsRatio(o,hr){
    return o/hr;
}
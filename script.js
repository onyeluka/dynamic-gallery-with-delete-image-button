var osloDel = document.getElementById('osloDel');
var osloart = document.querySelectorAll(".oslo");
osloDel.addEventListener('click', function() {
    osloart.forEach(oslo => {
        oslo.remove();
    });
});

var parisDel = document.getElementById('parisDel');
var parisart = document.querySelectorAll(".focus");
parisDel.addEventListener('click', function() {
    parisart.forEach(paris => {
        paris.remove();
    });
});


var helsiDel = document.getElementById('helsiDel');
var helsiart = document.querySelectorAll(".helsinki");
helsiDel.addEventListener('click', function() {
    helsiart.forEach(helsi => {
        helsi.remove();
    });
});

var viennaDel = document.getElementById('ViDel');
var viart = document.querySelectorAll(".vienna");
viennaDel.addEventListener('click', function() {
    viart.forEach(viar => {
        viar.remove();
    });
});
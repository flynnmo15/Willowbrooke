// Bio Functions
function addJenBio() {
    var bio = document.getElementById('bio');
    var jen = document.getElementById('jen');
    var amanda = document.getElementById('amanda');
    var chloe = document.getElementById('chloe');

    bio.innerHTML = "<p>Jen Blades</p>";

    jen.style.borderBottom = '2px solid black';
    amanda.style.borderBottom = '2px solid transparent';
    chloe.style.borderBottom = '2px solid transparent';

}
function addAmandaBio() {
    var bio = document.getElementById('bio');
    var jen = document.getElementById('jen');
    var amanda = document.getElementById('amanda');
    var chloe = document.getElementById('chloe');

    bio.innerHTML = "<p>Amanda Wasser</p>";

    jen.style.borderBottom = '2px solid transparent';
    amanda.style.borderBottom = '2px solid black';
    chloe.style.borderBottom = '2px solid transparent';
}

function addChloeBio() {
    var bio = document.getElementById('bio');
    var jen = document.getElementById('jen');
    var amanda = document.getElementById('amanda');
    var chloe = document.getElementById('chloe');

    bio.innerHTML = "<p>Chloe Johnson</p>";

    jen.style.borderBottom = '2px solid transparent';
    amanda.style.borderBottom = '2px solid transparent';
    chloe.style.borderBottom = '2px solid black';
}
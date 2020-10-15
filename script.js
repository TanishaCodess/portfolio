const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navUl');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
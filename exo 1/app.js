let liste = document.getElementsByTagName("ul");
let items = document.getElementsByTagName("li");

let i;

for (i = 0 ; i < liste.length; i++) {
    liste[i].style.listStyleType = "circle";
}

for (i = 0; i < items.length; i++) {
    items[i].innerHTML = "Blabla";
}
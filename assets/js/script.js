let texteBox = document.getElementById("saisie-tache");
let liste1 = document.getElementById("liste1")
let liste2 = document.getElementById("liste2")
let plus = document.getElementById("plus");
let poubelle = document.getElementById("poubelle");
let enfants = liste2.querySelectorAll('*');
let nbList = 0;
let texts = [];
for (let index = 0; index < 100; index++) {
    if(localStorage.getItem(index) !==null){
       ajouterListe1();
        
    }
    
}
document.addEventListener('keypress',(e)=>{
    clear(e);
})
document.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
    ajouterListe1(e);
    }
});
plus.addEventListener('click',(e)=>{
    ajouterListe1(e);
});
poubelle.addEventListener('click',()=>{
    liste2.innerHTML = '';  
});
function ajouterListe1(e){
        let element = document.createElement("li");
        texts[nbList] = texteBox.value;
        element.innerText = texts[nbList];
        if(texts[nbList] != ""){
            liste1.append(element);
            localStorage.setItem(nbList,texts[nbList]);
        }
        element.classList.add('tache');
        element.addEventListener('click',(e)=>{
            ajouterListe2(e);
            localStorage.removeItem(nbList);
            nbList--;
        });
        nbList++;
}
function ajouterListe2(e){
    let element = e.target;
    liste2.append(element);
    element.classList.add('fait');
    element.removeEventListener('click',(e)=>{
        ajouterListe2(e)
    })
}
function clear(e){
    if(e.key === '#'){
        localStorage.clear();
    }
}
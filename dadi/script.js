let userNumber = Math.floor(Math.random() * 7);
let bankNumber = Math.floor(Math.random() * 7);
let results = document.getElementById('results')

if(userNumber > bankNumber){
    results.innerHTML = "Hai vinto";
}else if(userNumber < bankNumber){
    results.innerHTML = "Hai perso";
}else if(userNumber = bankNumber){
    results.innerHTML = "Patta!";
}

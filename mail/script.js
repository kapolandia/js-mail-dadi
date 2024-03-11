const allowedEmails=["kapo@kapo.it", "kapo@gmail.com"];
let inputEmail = prompt("Scrivi la tua email")

for(let i = 0; i < (allowedEmails.length-1); i++){
    if(inputEmail === allowedEmails[i]){
        console.log("sei dentro bro");
    }else{
        console.log("Non sei ammesso!");
    }
}
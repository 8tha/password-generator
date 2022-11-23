const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pswOneEl = document.getElementById("psw-one-el")
let pswTwoEl = document.getElementById("psw-two-el")

function generatePsw() {
    pswOneEl.textContent = ""
    pswTwoEl.textContent = ""
    for(let i = 1; i < 11; i++) {
        let r = Math.floor(Math.random()*91)
        pswOneEl.textContent += characters[r]
    }
    for(let i = 1; i < 11; i++) {
        let r = Math.floor(Math.random()*91)
        pswTwoEl.textContent += characters[r]
    }
}

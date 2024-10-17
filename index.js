const sectionScoreboard = document.getElementById('Tombola')  

const createNumberCells = function () {

    for (let i = 1; i <= 90; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
    const number = document.createElement('h3')
    number.innerText = i  
    cell.appendChild(number)
    sectionScoreboard.appendChild(cell)
    }}

createNumberCells()



let extractedNumbers = [];

for (let i = 1; i<= 90; i++){
    extractedNumbers.push(i)
}



const button = document.createElement("button")
button.innerText = "Estrai il numero!"
buttonDiv.appendChild(button)

button.addEventListener ("click", ()=>{
    if(extractedNumbers.length > 0){
        const randomizer = Math.floor(Math.random()* extractedNumbers.length)
        const random = extractedNumbers[randomizer]
        extractedNumbers.splice(random, 1)
        const cells = document.querySelectorAll("h3");
        
        for (let i = 0; i < cells.length; i++) {
            if (parseInt(cells[i].innerText) === random) {
                cells[i].parentElement.classList.add("evidence")
                break
            }
        }
    } else {
        alert("Tutti i numeri sono stati estratti!");
    }

    
})




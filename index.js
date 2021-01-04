const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let computerChoice = () => {
    let choice = Math.floor(Math.random() * 2)
    let rps = ["rock", "paper", "scissors"]
    return rps[choice]
}

let userChoice = (n = 0) =>{
if (n === 10){
    rl.close()
}
    rl.question("Choose rock, paper, scissors ", answer =>{
        let cpu = computerChoice()
        if (answer === "rock"){
            if (cpu === "paper"){
                console.log(`Computer Chose ${cpu}`)
                console.log("you lose Good Game")
            } else if (cpu === "rock"){
                console.log(`Computer Chose ${cpu}`)
                console.log("tie Good Game")
            } else if (cpu === "scissors"){
                console.log(`Computer Chose ${cpu}`)
                console.log("you win Good Game")
            }
        } else if (answer === "scissors"){
            if (cpu === "paper"){
                console.log(`Computer Chose ${cpu}`)
                console.log("you win Good Game")
            } else if (cpu === "rock"){
                console.log(`Computer Chose ${cpu}`)
                console.log("you lose Good Game")
            } else if (cpu === "scissors"){
                console.log(`Computer Chose ${cpu}`)
                console.log("tie Good Game")
            }
        } else if (answer === "paper"){
            if (cpu === "paper"){
                console.log(`Computer Chose ${cpu}`)
                console.log("tie Good Game")
            } else if (cpu === "rock"){
                console.log(`Computer Chose ${cpu}`)
                console.log("you win Good Game")
            } else if (cpu === "scissors"){
                console.log(`Computer Chose ${cpu}`)
                console.log("you lose Good Game")
            }
    }
    console.log()
    userChoice(n + 1)
})
}
userChoice()

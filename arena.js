


function cartAdder(deck, hand, used) {
    if (hand.length < 5) {


        let randomIndex = Math.floor(Math.random() * deck.length)
        console.log("index", randomIndex)
        if (used.includes(randomIndex)) {

            console.log("naay")
            //
            cartAdder(deck, hand, used)
        }

        else {

            hand.push(deck[randomIndex])
            console.log("yaaay")
            used.push(randomIndex)
            console.log(hand)
        }


    }
    else console.log("maximum hand ")
}


//id for the clicked cartttttt 

function cardplay(hand, id, position) {
    for (let item in hand) {
        if (item.id == id) {
            position.push(item)
        }
    }



}

function creattoast(message){
const div= document.createElement('div')
  div.className='toast'
  div.textContent= message 
  toastbox.appendChild(div)
//  setTimeout(()=>div.remove(), 3000)
setInterval(()=>div.remove(), 5000)


}




const toastbox=document.getElementById("toastbox")
let Arr = ["t", "e", "x", "m", "o", "i"]
let hand = []


function first_round(who, game, modal) {
    let randomstart = Math.floor(Math.random()*10)%2===0 ? 0 : 1;
    game.turn = who[randomstart]
    console.log(game.turn)
    switch (game.turn) {
        case 'player':
            modal.showModal();
            modal.addEventListener('click', (e) => {

                if (e.target.textContent === 'light') {
                    console.log('light')
                    for (let i in playerDeck) {
                        if (playerDeck[i].camp === 'darkness') {
                            playerDeck[i].att *= 0.8
                            playerDeck[i].deff *= 0.8
                        }
                        if (botDeck[i].camp === 'light') {
                            botDeck[i].att *= 0.8
                            botDeck[i].deff *= 0.8
                        }

                    }
                     creattoast('you choose light and bot gets darkness ')
                    modal.close()
                    
                }
                else if (e.target.textContent === 'darkness') {
                    console.log('dark')
                    for (let i in playerDeck) {
                        if (playerDeck[i].camp === 'light') {
                            playerDeck[i].att *= 0.8
                            playerDeck[i].deff *= 0.8
                        }
                        if (botDeck[i].camp === 'darkness') {
                            botDeck[i].att *= 0.8
                            botDeck[i].deff *= 0.8
                        }

                    }
                    creattoast('you choose darkness and bot gets light')
                    modal.close()
                }
                // else {
                //     // test
                //     cartAdder(Arr, hand, MyUsedCards)
                // }
            })
        break;




        case 'bot':
            console.log('boot turn')
           let randomChoice=Math.floor(Math.random()*10)%2===0 ? 0 : 1;
           let botChoices=['light','darkness']
           let botChoice=botChoices[randomChoice]

           console.log('boot chooooose the :',botChoice)


           for(let i in botDeck){
            if(botDeck[i].camp!==botChoice){
                botDeck[i].att *= 0.8;
                botDeck[i].deff *= 0.8;
            }
            
            if (playerDeck[i].camp===botChoice){
             playerDeck[i].att *= 0.8
             playerDeck[i].deff *= 0.8
            }
           }
          
            creattoast(`the bot has chosen the  ${botChoice}` )
           
           

            break



    }
}



let playerDeck = []
let botDeck = []
function game_start() {
    const modal = document.querySelector('.modal')
    let MyUsedCards = []
    let HisUsedCards = []
    let who = ['player', 'bot']

    const game = { turn: null, over: false, player: null, bot: null }
    first_round(who, game, modal)





}
game_start()

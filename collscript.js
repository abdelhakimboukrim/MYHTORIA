const CARDS = [
    { id: 1, name: 'brother', rank: 'common', family: 'other', image: 'img/cards/common/brother.png' },
    { id: 2, name: 'cat', rank: 'common', family: 'red', image: 'img/cards/common/cat.png' },
    { id: 3, name: 'killwag', rank: 'common', family:'green', image: 'img/cards/common/killwag.png' },
    { id: 4, name: 'misstik', rank: 'common', family: 'red', image: 'img/cards/common/misstik.png' },
    { id: 5, name: 'mouthface', rank: 'common', family: 'red', image: 'img/cards/common/mouthface.png' },
    { id: 6, name: 'mummy', rank: 'common', family: 'yellow', image: 'img/cards/common/mummy.png' },
    { id: 7, name: 'worm', rank: 'common', family: 'yellow', image: 'img/cards/common/worm.png' },
    { id: 8, name: 'guy', rank: 'rare', family: 'green', image: 'img/cards/rare/guy.png' },
    { id: 9, name: 'jesska', rank: 'rare', family: 'green', image: 'img/cards/rare/jesska.png' },
    { id: 10, name: 'john', rank: 'rare', family: 'green', image: 'img/cards/rare/john.png' },
    { id: 11, name: 'razor', rank: 'rare', family: 'red', image: 'img/cards/rare/razor.png' },
    { id: 12, name: 'saint', rank: 'rare', family: 'other', image: 'img/cards/rare/saint.png' },
    { id: 13, name: 'scare', rank: 'rare', family: 'yellow', image: 'img/cards/rare/scare.png' },
    { id: 14, name: 'artorus', rank: 'epic', family: 'red', image: 'img/cards/epic/artorus.png' },
    { id: 15, name: 'hal', rank: 'epic', family: 'green', image: 'img/cards/epic/hal.png' },
    { id: 16, name: 'redguy', rank: 'epic', family: 'red', image: 'img/cards/epic/redguy.png' },
    { id: 17, name: 'sinstro', rank: 'epic', family: 'yellow', image: 'img/cards/epic/sinstro.png' },
    { id: 18, name: 'batman', rank: 'legendary', family: 'yellow', image: 'img/cards/legendary/batman.png' },
    { id: 19, name: 'greed', rank: 'legendary', family: 'other', image: 'img/cards/legendary/greed.png' },
    { id: 20, name: 'paralaxx',rank: 'legendary', family: 'green', image: 'img/cards/legendary/paralaxx.png' },
    { id: 21, name: 'white', rank: 'legendary', family: 'other', image: 'img/cards/legendary/white.png' },
];

const rightpage=document.getElementById('rightpage')

const leftpage=document.getElementById('leftpage')
const lowerrightpage=document.getElementById('lowerright')
const upperrightpage=document.getElementById('upperright')


const beginnerpack={name:"parallax", rank:"legndary", family:"green", scr:"img/PARLLAX.jpeg"}
const book= document.querySelector('.book')
const collection=[]
function addpack(pack){
    for(let i=0; i<pack.length; i++){
    
         leftpage.innerHTML+=`<img  id=${pack[i].id} src=${pack[i].image}> `;
           collection.push(pack[i])
    }

      
    }
const legendary=collection.filter( item => item.rank =='legendary')
console.log(legendary)
console.log(collection)



//leftpage.addEventListener('click',function(e){
   
addpack(CARDS)
console.log(leftpage)

//} )
leftpage.addEventListener('click', function(e){
   
    for(let card of collection ){
        if(e.target.getAttribute('id') == card.id ){
            upperrightpage.innerHTML=" "
            lowerrightpage.innerHTML=" "
            upperrightpage.innerHTML+=`<img  id=${card.id} src=${card.image}>`;
            lowerrightpage.innerHTML+=`<p>rank:  ${card.rank}</p>`+`<p>family:  ${card.family}</p>`
            console.log(lowerrightpage)
            console.log(legendary)
        }
    }
} ) 






    
const CARDS = [
    { id: 1, name: 'brother', rank: 'common', family: 'other', image: 'img/cards/common/brother.png' },
    { id: 2, name: 'cat', rank: 'common', family: 'red', image: 'img/cards/common/cat.png' },
    { id: 3, name: 'killwag', rank: 'common', family:'green', image: 'img/cards/common/killwag.png' },
    { id: 4, name: 'misstik', rank: 'common', family: 'red', image: 'img/cards/common/misstik.png' },
    { id: 5, name: 'mouthface', rank: 'common', family: 'red', image: 'img/cards/common/mouthface.png' },
    { id: 6, name: 'mummy', rank: 'common', family: 'yellow', image: 'img/cards/common/mummy.png' },
    { id: 7, name: 'worm', rank: 'common', family: 'yellow', image: 'img/cards/common/worm.png' },
    { id: 8, name: 'guy', rank: 'rare', family: 'green', image: 'img/cards/rare/guy.png' },
    { id: 9, name: 'jesska', rank: 'rare', family: 'yellow ', image: 'img/cards/rare/jesska.png' },
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
//packs 
let beginner=[{ id: 1, name: 'brother', rank: 'common', family: 'other', image: 'img/cards/common/brother.png' },
    { id: 2, name: 'cat', rank: 'common', family: 'red', image: 'img/cards/common/cat.png' },
    { id: 3, name: 'killwag', rank: 'common', family:'green', image: 'img/cards/common/killwag.png' }]


    let goodguys
    let badguys 
    let lucky
let packsobj={beginner:beginner,goodguys:goodguys ,badguys:badguys , lucky:lucky  }

//ajouter a panier
const boosters = document.querySelector('.boosters');
const basket = document.querySelector('.basket');
const totalprice  = document.querySelector('.totalprice ');


let total = 0;
let basketarray=[]

function ajouterProduit (title,price,packarr){
    const newbooster = document.createElement('div');
        newbooster.textContent = `${title}-${price} `

    const bttn= document.createElement('button')   
     bttn.textContent = 'remove';
    bttn.className = 'remove';
    

    
    newbooster.appendChild(bttn);
    basket.appendChild(newbooster);

    total = total + price;
    totalprice.textContent = total;
    for(let i=0 ; i<packarr.length; i++){
        basketarray.push(card)
    }


}


boosters.addEventListener('click', (e) =>{ 
    
    console.log("yeep")
    if (e.target.classList.contains('buy')){
        console.log("yeep2")
        const booster= e.target.closest('.booster');
        const titre = booster.querySelector('h3').textContent
        const prixTexte = booster.querySelector('.price').textContent
        const boosterarraytext=booster.getAttribute('data-array')
        const boosterarray =packsobj[boosterarraytext]
        console.log(boosterarraytext)
        const prix= parseFloat(prixTexte , 10);
        console.log(boosterarray)
        
    
        ajouterProduit(titre, prix,boosterarray)
    }
})
//remove
basket.addEventListener('click' , (e) => {
    console.log("remove 1")
    if(e.target.classList.contains('remove')){
        console.log("remove 2")
        const booster = e.target.parentElement
        
        
        const prixTexte = booster.textContent.split('-')[1]
       
        const prix = parseFloat(prixTexte);
         console.log(prix)
        total =  total - prix; 

        totalprice.textContent = total;

        booster.remove();
    }
})



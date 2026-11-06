// const CARDS = [
//     { id: 1, name: 'brother', rank: 'common', family: 'other', image: 'img/cards/common/brother.png' },
//     { id: 2, name: 'cat', rank: 'common', family: 'red', image: 'img/cards/common/cat.png' },
//     { id: 3, name: 'killwag', rank: 'common', family:'green', image: 'img/cards/common/killwag.png' },
//     { id: 4, name: 'misstik', rank: 'common', family: 'red', image: 'img/cards/common/misstik.png' },
//     { id: 5, name: 'mouthface', rank: 'common', family: 'red', image: 'img/cards/common/mouthface.png' },
//     { id: 6, name: 'mummy', rank: 'common', family: 'yellow', image: 'img/cards/common/mummy.png' },
//     { id: 7, name: 'worm', rank: 'common', family: 'yellow', image: 'img/cards/common/worm.png' },
//     { id: 8, name: 'guy', rank: 'rare', family: 'green', image: 'img/cards/rare/guy.png' },
//     { id: 9, name: 'jesska', rank: 'rare', family: 'yellow', image: 'img/cards/rare/jesska.png' },
//     { id: 10, name: 'john', rank: 'rare', family: 'green', image: 'img/cards/rare/john.png' },
//     { id: 11, name: 'razor', rank: 'rare', family: 'red', image: 'img/cards/rare/razor.png' },
//     { id: 12, name: 'saint', rank: 'rare', family: 'other', image: 'img/cards/rare/saint.png' },
//     { id: 13, name: 'scare', rank: 'rare', family: 'yellow', image: 'img/cards/rare/scare.png' },
//     { id: 14, name: 'artorus', rank: 'epic', family: 'red', image: 'img/cards/epic/artorus.png' },
//     { id: 15, name: 'hal', rank: 'epic', family: 'green', image: 'img/cards/epic/hal.png' },
//     { id: 16, name: 'redguy', rank: 'epic', family: 'red', image: 'img/cards/epic/redguy.png' },
//     { id: 17, name: 'sinstro', rank: 'epic', family: 'yellow', image: 'img/cards/epic/sinstro.png' },
//     { id: 18, name: 'batman', rank: 'legendary', family: 'yellow', image: 'img/cards/legendary/batman.png' },
//     { id: 19, name: 'greed', rank: 'legendary', family: 'other', image: 'img/cards/legendary/greed.png' },
//     { id: 20, name: 'paralaxx',rank: 'legendary', family: 'green', image: 'img/cards/legendary/paralaxx.png' },
//     { id: 21, name: 'white', rank: 'legendary', family: 'other', image: 'img/cards/legendary/white.png' },
// ]


const CARDS = [
    
    { id: 1, name: 'brother', rank: 'common', family: 'other', att: 18, deff: 32, camp: 'light', image: 'img/cards/common/brother.png' },
    { id: 2, name: 'cat', rank: 'common', family: 'red', att: 32, deff: 18, camp: 'darkness', image: 'img/cards/common/cat.png' },
    { id: 3, name: 'killwag', rank: 'common', family: 'green', att: 24, deff: 30, camp: 'light', image: 'img/cards/common/killwag.png' },
    { id: 4, name: 'misstik', rank: 'common', family: 'red', att: 25, deff: 25, camp: 'darkness', image: 'img/cards/common/misstik.png' },
    { id: 5, name: 'mouthface', rank: 'common', family: 'red', att: 29, deff: 21, camp: 'darkness', image: 'img/cards/common/mouthface.png' },
    { id: 6, name: 'mummy', rank: 'common', family: 'yellow', att: 19, deff: 31, camp: 'darkness', image: 'img/cards/common/mummy.png' },
    { id: 7, name: 'worm', rank: 'common', family: 'yellow', att: 23, deff: 29, camp: 'darkness', image: 'img/cards/common/worm.png' },

    { id: 8, name: 'guy', rank: 'rare', family: 'green', att: 43, deff: 29, camp: 'light', image: 'img/cards/rare/guy.png' },
    { id: 9, name: 'jesska', rank: 'rare', family: 'yellow', att: 31, deff: 42, camp: 'light', image: 'img/cards/rare/jesska.png' },
    { id: 10, name: 'john', rank: 'rare', family: 'green', att: 34, deff: 42, camp: 'light', image: 'img/cards/rare/john.png' },
    { id: 11, name: 'razor', rank: 'rare', family: 'red', att: 42, deff: 29, camp: 'darkness', image: 'img/cards/rare/razor.png' },
    { id: 12, name: 'saint', rank: 'rare', family: 'other', att: 25, deff: 49, camp: 'light', image: 'img/cards/rare/saint.png' },
    { id: 13, name: 'scare', rank: 'rare', family: 'yellow', att: 40, deff: 33, camp: 'darkness', image: 'img/cards/rare/scare.png' },

    
    { id: 14, name: 'artorus', rank: 'epic', family: 'red', att: 64, deff: 36, camp: 'darkness', image: 'img/cards/epic/artorus.png' },
    { id: 15, name: 'hal', rank: 'epic', family: 'green', att: 55, deff: 48, camp: 'light', image: 'img/cards/epic/hal.png' },
    { id: 16, name: 'redguy', rank: 'epic', family: 'red', att: 61, deff: 38, camp: 'light', image: 'img/cards/epic/redguy.png' },
    { id: 17, name: 'sinstro', rank: 'epic', family: 'yellow', att: 53, deff: 51, camp: 'darkness', image: 'img/cards/epic/sinstro.png' },

    
    { id: 18, name: 'batman', rank: 'legendary', family: 'yellow', att: 82, deff: 88, camp: 'light', image: 'img/cards/legendary/batman.png' },
    { id: 19, name: 'greed', rank: 'legendary', family: 'other', att: 100, deff: 75, camp: 'darkness', image: 'img/cards/legendary/greed.png' },
    { id: 20, name: 'paralaxx', rank: 'legendary', family: 'green', att: 110, deff: 95, camp: 'darkness', image: 'img/cards/legendary/paralaxx.png' },
    { id: 21, name: 'white', rank: 'legendary', family: 'other', att: 110, deff: 110, camp: 'light', image: 'img/cards/legendary/white.png' }
];
//packs 
let beginner=CARDS.filter(i=>i.rank==='common')


    let goodguys=CARDS.filter(i=>i.rank==='rare')
    let badguys =CARDS.filter(i=>i.rank==='epic') 
    let lucky=CARDS.filter(i=>i.rank==='legendary')

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
        newbooster.className='newbooster'
    const bttn= document.createElement('button')   
     bttn.textContent = 'remove';
    bttn.className = 'remove';
    

    
    newbooster.appendChild(bttn);
    basket.appendChild(newbooster);

    total = total + price;
    totalprice.textContent = total;
   
    basketarray.push(packarr)
    


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
    console.log(basketarray)
})



//remove
basket.addEventListener('click' , (e) => {
    console.log("remove 1")
     

    if(e.target.classList.contains('remove')){
        console.log("remove 2")
        const booster = e.target.parentElement
        const packs = Array.from(basket.querySelectorAll('.newbooster'));
       const index = packs.indexOf(booster);
       basketarray.splice(index, 1);
        
        const prixTexte = booster.textContent.split('-')[1]
       
        const prix = parseFloat(prixTexte);
         console.log(prix)
        total =  total - prix; 

        totalprice.textContent = total;

        booster.remove();
        console.log(basketarray)
    }
   
    else if(e.target.textContent==='valider'){

        console.log("valid")
        const validatedPacks=JSON.parse (localStorage.getItem('validatedPacks'))||[]
        for(let item of basketarray) {validatedPacks.push(item) } 

        localStorage.setItem('validatedPacks',JSON.stringify(validatedPacks)  )
        
        basket.querySelectorAll('.newbooster').forEach(item=> item.remove())
        basketarray=[]
    }

})



//validate buy


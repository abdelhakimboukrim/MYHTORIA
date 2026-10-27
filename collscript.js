

const rightpage=document.getElementById('rightpage')

const leftpage=document.getElementById('leftpage')
const lowerrightpage=document.getElementById('lowerright')
const upperrightpage=document.getElementById('upperright')
const filterpage=document.getElementById('filterr')



const book= document.querySelector('.book')
const collection=[]

function addpack(pack){
    for(let i=0; i<pack.length; i++){
    
         ;
           collection.push(pack[i])
    }

      
    }

function affichage(array){
    leftpage.innerHTML=" "
    for(let card of array){
      leftpage.innerHTML+=`<img  id=${card.id} src=${card.image}> `;
    }
}


function myfilter(arr,filtertype,value ){
    let newarr=[]
    for(let card of arr){
        
        if(card[filtertype] == value){
            newarr.push(card);
        }
    }return newarr;
}

addpack(CARDS)
affichage(collection)

let legendarycards = myfilter(collection,'rank','legendary')
let epiccards=myfilter(collection,'rank','epic')
let rarecards=myfilter(collection,'rank','rare')
let commoncards=myfilter(collection,'rank','common')

let greencards=myfilter(collection,'family','green')
let redcards=myfilter(collection,'family','red')
let yellowcards=myfilter(collection,'family','yellow')
let othercorpscards=myfilter(collection,'family','other')
console.log()
filterpage.addEventListener('click', function (e){
    switch(e.target.textContent){
        case 'Epic': 
        affichage(epiccards)
        break;
        case 'Rare': 
        affichage(rarecards)
        break;
        case 'Legendary': 
        affichage(legendarycards)
        break;
        case 'Common': 
        affichage(commoncards)
        break;
        case 'Green': 
        affichage(greencards)
        break;
        case 'Red': 
        affichage(redcards)
        break;
        case 'Yellow': 
        affichage(yellowcards)
        break;
        case 'Other corps': 
        affichage(othercorpscards)
        break;
         default: 
        affichage(collection)
        

        
    }
})




leftpage.addEventListener('click', function(e){
   
    for(let card of collection ){
        if(e.target.getAttribute('id') == card.id ){
            upperrightpage.innerHTML=" "
            lowerrightpage.innerHTML=" "

            upperrightpage.innerHTML+=`<img  id=${card.id} src=${card.image}>`;
            lowerrightpage.innerHTML+=`<p>rank:  ${card.rank}</p>`+`<p>family:  ${card.family}</p>`

           
            console.log(collection)
           
            
        }
    }
} ) 






    
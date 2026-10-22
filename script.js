const boosters = document.querySelector('.boosters');
const basket = document.querySelector('.basket');
const totalprice  = document.querySelector('.totalprice ');

let total = 0;


function ajouterProduit (title,price){
    const newbooster = document.createElement('div');
        newbooster.textContent = `${title}-${price} `

    const bttn= document.createElement('button')   
     bttn.textContent = 'remove';
    bttn.className = 'remove';

    newbooster.appendChild(bttn);
    basket.appendChild(newbooster);

   

    total = total + price;
    totalprice.textContent = total;
}

boosters.addEventListener('click', (e) =>{ 
    
    console.log("yeep")
    if (e.target.classList.contains('buy')){
        console.log("yeep2")
        const booster= e.target.closest('.booster');
        const titre = booster.querySelector('h3').textContent
        const prixTexte = booster.querySelector('.price').textContent

        const prix= parseFloat(prixTexte , 10);
        

        ajouterProduit(titre, prix)
    }
})

basket.addEventListener('click' , (e) => {
    if(e.target.classList.contains('remove')){
        const booster = e.target.parentElement
        
        
        const prixTexte = booster.querySelector('.price').textContent

        const prix = parseFloat(prixTexte);

        total =  total - prix; 

        totalprice.textContent = total;

        booster.remove();
    }
})
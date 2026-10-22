const boosters = document.querySelector('.boosters');
const basket = document.querySelector('.basket');
const totalprice  = document.querySelector('.totalprice ');

let total = 0;


function ajouterProduit (title,price){
    const booster = document.createElement('.booster');
        booster.textContent = `${title} _ ${price} DH`

    const btn = document.createElement('button');
    btn.textContent = 'remove';
    btn.className = 'remove';

    booster.appendChild(btn);
    basket.appendChild(booster);

   

    total += price;
    totalprice.textContent = total;
}

boosters.addEventListener('click', (e) =>{ 
    
    console.log("yeep")
    if (e.target.classList.contains('buy')){
        console.log("yeep2")
        const booster= e.target.closest('.booster')
        const titre = booster.querySelector('h3').textContent;
        const prixTexte = booster.querySelector('.price').textContent //.split('_')[1].replace('DH' , '')

        const price = parseInt(prixTexte , 10);
        

        ajouterProduit(titre, price)
    }
})

basket.addEventListener('click' , (e) => {
    if(e.target.classList.contains('remove')){
        const booster = e.target.parentelement
        
        
        const prixTexte = li.textContent.split('_')[1].replace('DH', '').trim();

        const prix = parseInt(prixTexte);

        total -= prix; 

        totalSpan.textContent = total;

        booster.remove();
    }
})
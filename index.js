var offset = 3;
function handleFetch() {
    fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
    .then(response => {
        return response.json();
    })
    .then(response => {
        if (offset > response.length) {
            alert("Não há mais Quartos")
        } else {
            for (i = 0; i < offset; i++) {
                const cards = document.querySelector('.cards');
                
                const card = document.createElement('div');
                card.classList = 'card';
                card.style.boxShadow = '1px 1px 7px 0px rgba(0,0,0,0.75)';
                card.style.border = 'none';
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    window.location = 'https://google.com';
                })
               
                let img = document.createElement('img');
                img.classList = 'card-img-top';
                img.src = response[i].photo;
                img.alt = response[i].property_type;
                card.appendChild(img);
    
                const cardBody = document.createElement('div');
                cardBody.classList = 'card-body';
    
                let title = document.createElement('h5');
                title.classList.add('card-title', 'capitalize');
                title.innerHTML = response[i].property_type;
                cardBody.appendChild(title);
               
                let description = document.createElement('p');
                title.classList.add('card-text', 'capitalize');
                description.innerHTML = response[i].name;
                cardBody.appendChild(description);
    
                let price = document.createElement('h5');
                price.classList = 'card-title';
                price.innerHTML = '$ ' +  response[i].price.toFixed(2);
                cardBody.appendChild(price);
    
                card.appendChild(cardBody);
                cards.appendChild(card); 
            }
        }
        
    })


    this.offset += 3
    
}

onload


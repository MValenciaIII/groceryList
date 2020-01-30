// function test(fName, lName) {
//     event.preventDefault();
//     var message = document.getElementById('output');
//     message.innerText = "Mundo";


//     var cart = {
//         firstName: fName,
//         lastName: lName
//     };
//     console.log(cart);
// }
/*
    var cart = [
        {
            name: 'item 1',

        }
    ]
*/

/* let cart = [];

function addCart(item, cost, amount) {
    if(!cart.length){
    cart.push({  
        item: item,
        cost: cost,
        amount: amount
    });
}
else {
    let found = false;
    cart.forEach(qty => {
        if(qty.item == item) {
            qty.amount++;
            qty.cost += cost;
            found = true;
        }
    });
    if(!found){
    cart.push({  
        item,
        cost,
        amount: 1
    });
    }
}
    var number = document.getElementById("checkout");
    var count = 0;
    cart.forEach(checkout => {
        count += checkout.amount;
    });
    number.innerHTML = count;

    
    let reciept = document.getElementById('receipt');
    reciept.innerHTML = cart;
}
console.log(cart) */

/*
let found = false;
cart.forEach(cartItem => {
    if(cartItem.item == item) {
        cartItem.qty++;
        found == true;
    }
});
    if (!found) {
        cart.push({  
            item: item,
            cost: cost,
            quantity: 1
        });
    }


*/
let itemList = []


let pizza = document.getElementById('pizza');
let beer = document.getElementById('beer');
let receipt = document.getElementById('receipt');

// pizza.setAttribute('data-price', 2.99);
// beer.setAttribute('data-price', 4.99);

// pizza.addEventListener('click', function () {
//     item.name = pizza.innerText
//     item.price = pizza.getAttribute('data-price');
//     item.value = pizza.getAttribute('value');
    
//     itemList.push(item)
//     console.log(itemList);
// })

let foodItems = document.querySelectorAll('button');

for (let i = 0; i < foodItems.length; i++) {
    const item = foodItems[i];
    foodItems[i].value = 1;
    //.innerText //Grabs the text only
    //.innerHTML //Grabs the whole HTML Element.
    foodItems[i].addEventListener('click', function () {
        let item = {};
        let found = false;
        let price = foodItems[i].getAttribute('data-price');
        // item.name = foodItems[i].innerText;
        // item.price = foodItems[i].getAttribute('data-price');
        // item.qty = foodItems[i].getAttribute('value');
        for (let j = 0; j < itemList.length; j++) {
            const element = itemList[j];
            if (element.name == foodItems[i].innerText) {
                found = true;
                itemList[j].qty++;
            }
        }
        if (!found) {
            //if you set price in a object itll automatically set its name as that variable.
            itemList.push({name: foodItems[i].innerText, price, qty: 1});

        }
        updateItems();
        updateTotal();
    })
}

function updateItems() {
    let numberItems = document.getElementById('numberItems');

    numberItems.innerHTML = itemList.length;
}

function updateTotal() {
    let cartTotal = document.getElementById('cartTotal');
    let total = 0;
    for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i];
        total += item.price * item.qty;

    }
    cartTotal.innerText = total;
}



console.log(pizza)
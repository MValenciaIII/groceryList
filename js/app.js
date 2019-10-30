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

let cart = [];

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
console.log(cart)

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
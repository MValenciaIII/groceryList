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

*/

function addCart(item, cost) {
    let cart = {
        item: item,
        cost: cost
    };
    // console.log(cart);
    let reciept = document.createElement('P');
    let reciePt2 = document.createElement('P');
    reciept.innerHTML = cart.item;
    document.getElementById("receipt").appendChild(receipt);
    reciept2.innerHTML = cart.cost;
    document.getElementById("receipt2").appendChild(receipt2);
}


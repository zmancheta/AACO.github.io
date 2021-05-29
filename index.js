var productList = [];
var totalPrice=0;
var a = 0;
//-----------------------------

function displayProduct() {
    var x = 0;
    document.getElementById('productPrice').innerHTML = "";
    for(var i=0; i<productList.length; i++) {
        document.getElementById('productPrice').innerHTML += "<li class='listbg'><strong>" + productList[i].prod_name + "</strong><br>Php " + productList[i].prod_price.toFixed(2) + "<button class='close' onclick='removeItem(this.id)' id='" + x++ + "' >x</button></li>";
    }
}

function displayTotal() {
    var productPrice=productList[productList.length-1].prod_price;
    totalPrice = totalPrice + productPrice;
    document.getElementById('total').innerHTML = "<strong>" + "Total Price: " + "</strong>" + "Php " + totalPrice.toFixed(2);
}
        
function removeItem(clicked_id) {
    var z = clicked_id;
    totalPrice = totalPrice - productList[z].prod_price;
    var total = totalPrice;
    document.getElementById('total').innerHTML = "Total: " + "Php " + Math.abs(total);
    productList.splice(z,1);
    displayProduct();
}

//-------------------------------
function bookOne() {
    var book1 = { 
    prod_name: "A Little Life",
    prod_price: 900.00
    };
    productList.push(book1);
    displayProduct();
    displayTotal();
}
function bookTwo() {
    var book2 = { 
    prod_name: "The Invisible Life of Addie Larue",
    prod_price: 900.00
    };
    productList.push(book2);
    displayProduct();
    displayTotal();
}
function bookThree() {
    var book3 = { 
    prod_name: "They Both Die at the End",
    prod_price: 500.00
    };
    productList.push(book3);
    displayProduct();
    displayTotal();

}
function bookFour() {
    var book4 = { 
        prod_name: "The Song of Achilles",
    prod_price: 700.00
    };
    productList.push(book4);
    displayProduct();
    displayTotal();
}
function bookFive() {
    var book5 = { 
        prod_name: "The Seven Husbands of Evelyn Hugo",
    prod_price: 700.00
    };
    productList.push(book5);
    displayProduct();
    displayTotal();
}
function bookSix() {
    var book6 = { 
        prod_name: "It Ends With Us",
    prod_price: 900.00
    };
    productList.push(book6);
    displayProduct();
    displayTotal();
}
function bookSeven() {
    var book7 = { 
        prod_name: "Midnight Sun",
    prod_price: 800.00
    };
    productList.push(book7);
    displayProduct();
    displayTotal();
}
function bookEight() {
    var book8 = { 
        prod_name: "These Violent Delights",
    prod_price: 700.00
    };
    productList.push(book8);
    displayProduct();
    displayTotal();
}
function bookNine() {
    var book9 = { 
        prod_name: "Lovely War",
    prod_price: 650.00
    };
    productList.push(book9);
    displayProduct();
    displayTotal();
}
function bookTen() {
    var book10 = { 
        prod_name: "Red White Royal Blue",
    prod_price: 700.00
    };
    productList.push(book10);
    displayProduct();
    displayTotal();
}
function bookEleven() {
    var book11 = { 
        prod_name: "A Court of Silver Flames",
    prod_price: 950.00
    };
    productList.push(book11);
    displayProduct();
    displayTotal();
}
function bookTwelve() {
    var book12 = { 
        prod_name: "Legendborn",
    prod_price: 900.00
    };
    productList.push(book12);
    displayProduct();
    displayTotal();
}
function bookThirteen() {
    var book13 = { 
        prod_name: "From Blood and Ash",
    prod_price: 950.00
    };
    productList.push(book13);
    displayProduct();
    displayTotal();
}
function bookFourteen() {
    var book14 = { 
        prod_name: "We Hunt the Flame",
    prod_price: 500.00
    };
    productList.push(book14);
    displayProduct();
    displayTotal();
}
function bookFifteen() {
    var book15 = { 
        prod_name: "An Ember in the Ashes",
    prod_price: 450.00
    };
    productList.push(book15);
    displayProduct();
    displayTotal();
}
function bookSixteen() {
    var book16 = { 
        prod_name: "Gone Girl",
    prod_price: 350.00
    };
    productList.push(book16);
    displayProduct();
    displayTotal();
}
function bookSeventeen() {
    var book17 = { 
        prod_name: "The Girl on the Train",
    prod_price: 200.00
    };
    productList.push(book17);
    displayProduct();
    displayTotal();
}
function bookEighteen() {
    var book18 = { 
        prod_name: "The Silent Patient",
    prod_price: 400.00
    };
    productList.push(book18);
    displayProduct();
    displayTotal();
}
function bookNineteen() {
    var book19 = { 
        prod_name: "Verify",
    prod_price: 900.00
    };
    productList.push(book19);
    displayProduct();
    displayTotal();
}
function bookTwenty() {
    var book20 = { 
        prod_name: "The Woman in the Window",
    prod_price: 550.00
    };
    productList.push(book20);
    displayProduct();
    displayTotal();
}
function bookTwentyOne() {
    var book21 = { 
        prod_name: "Normal People",
    prod_price: 700.00
    };
    productList.push(book21);
    displayProduct();
    displayTotal();
}
function bookTwentyTwo() {
    var book22 = { 
        prod_name: "The Midnight Library",
    prod_price: 600.00
    };
    productList.push(book22);
    displayProduct();
    displayTotal();
}
function bookTwentyThree() {
    var book23 = { 
        prod_name: "Conversations With Friends",
    prod_price: 900.00
    };
    productList.push(book23);
    displayProduct();
    displayTotal();
}
function bookTwentyFour() {
    var book24 = { 
        prod_name: "The Vanishing Half",
    prod_price: 800.00
    };
    productList.push(book24);
    displayProduct();
    displayTotal();
}
function bookTwentyFive() {
    var book25 = { 
        prod_name: "We Were Liars",
    prod_price: 350.00
    };
    productList.push(book25);
    displayProduct();
    displayTotal();
}
function bookTwentySix() {
    var book26 = { 
        prod_name: "Six of Crows Duology",
    prod_price: 1300.00
    };
    productList.push(book26);
    displayProduct();
    displayTotal();
}
function bookTwentySeven() {
    var book27 = { 
        prod_name: "Shadow of Bone Trilogy",
    prod_price: 1500.00
    };
    productList.push(book27);
    displayProduct();
    displayTotal();
}
function bookTwentyEight() {
    var book28 = { 
        prod_name: "Percy Jackson Greek Gods Set",
    prod_price: 2300.00
    };
    productList.push(book28);
    displayProduct();
    displayTotal();
}
function bookTwentyNine() {
    var book29 = { 
        prod_name: "Harry Potter Paperback Collection",
    prod_price: 3000.00
    };
    productList.push(book29);
    displayProduct();
    displayTotal();
}
function bookThirty() {
    var book30 = { 
        prod_name: "The Twilight Saga Limited Edition Box Set",
    prod_price: 2700.00
    };
    productList.push(book30);
    displayProduct();
    displayTotal();
}
//-----------------------------------------------
function postFunction(){
    var productlist = JSON.stringify(productList);
    document.getElementById("custorder").value = productlist;
}
//----------------------------------------------

                
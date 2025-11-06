 var firebaseConfig = {
  apiKey: "AIzaSyBEM-ImsVQl__e5ZnTRJ1eUFajg6N0_sDs",
  authDomain: "fast-food-274cb.firebaseapp.com",
  // databaseURL: "https://fast-food-274cb-default-rtdb.firebaseio.com",
  projectId: "fast-food-274cb",
  storageBucket: "fast-food-274cb.firebasestorage.app",
  messagingSenderId: "105985670341",
  appId: "1:105985670341:web:d4e81ad74a588a91c284ac"
};

 
  var app = firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

  
  function order1() {
     window.open( "order1.html", "_self");
  };
   function order2() {
     window.open( "order2.html", "_self");
  };
   function order3() {
     window.open( "order3.html", "_self");
  };
   function order4() {
     window.open( "order4.html", "_self");
  };
   function order5() {
     window.open( "order5.html", "_self");
  };
   function order6() {
     window.open( "order6.html", "_self");
  };
   function order7() {
     window.open( "order7.html", "_self");
  };
   function order8() {
     window.open( "order8.html", "_self");
  };
   function order9() {
     window.open( "order9.html", "_self");
  };
   function order10() {
     window.open( "order10.html", "_self");
  };
   function order11() {
     window.open( "order11.html", "_self");
  };
   function order12() {
     window.open( "order12.html", "_self");
  };
   function order13() {
     window.open( "order13.html", "_self");
  };
   function order14() {
     window.open( "order14.html", "_self");
  };
   function order15() {
     window.open( "order15.html", "_self");
  };
  function submit(){
var userName = document.getElementById('name').value;
var userEmail = document.getElementById('email').value;
var userPhone = document.getElementById('phone').value;
var userMessage = document.getElementById('message').value;
if (userEmail===""||userName===""||userMessage===""||userPhone==="") {
    alert("Pleace fill your empty Details!");
} else {
    var user_contact ={
    user_name:userName,
    user_email:userEmail,
    user_phone:userPhone,
    user_message:userMessage,
}
firebase.database().ref("user_feedback").push(user_contact);
alert("Your Message has been Send!")
}

};
var count = 0;
var quantity = document.getElementById("quantity");
function add(){
    count++;
    quantity.innerText=count;
}
function min(){
   if(count>0){
     count--;
    quantity.innerText=count;
   }
}

var counter =document.getElementById("counter");
var arr =[];
function addproduct(name,price){
var username = document.getElementById('name').value;
var useraddress = document.getElementById('address').value;
var userphone = document.getElementById('number').value;
if (count === 0||username===""||useraddress===""||userphone==="") {
    alert("Pleace fill your Empty details!");
} else {

    var product_obj = {
    user_name:username,
    user_address:useraddress,
    user_number:userphone,
    product_name: name,
    product_price: price*count,
    product_quentity:count,
  };
  arr.push(product_obj)
  counter.innerText =arr.length;
 firebase.database().ref("products").push(product_obj);
 
alert("Your order has been placed Successfully");
  
}
};
firebase.database().ref("products").on("child_added", function (data) {
    var key = data.key;
    var product_name = data.val().product_name;
    var product_quentity = data.val().product_quentity;
    var product_price = data.val().product_price;



    var table = document.getElementById("display-products");

    table.innerHTML += `
  <tbody>
    <tr id="${key}">
       
    
      <td>${product_name}</td>
      <td>${product_quentity}</td>
      <td>${product_price} </td>
         <td>
          <button class="btn btn-danger" onclick="removeProduct('${key}')">Remove</button>
        </td>



 
    </tr>
    </tbody>
  `;
  
});
function removeProduct(key){
  firebase.database().ref("products/" + key).remove();
  document.getElementById(key).remove(); 
  
};
 window.addpizza = function(pizzaName){
    
  
    var price = document.querySelector("input[name='pizza']:checked");
    if(!price){
      alert("Please select pizza size!");
      return;
    }
   var quen =1;
    var customerName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var number = document.getElementById("number").value;

    if(customerName == "" || address == "" || number == ""){
      alert("Please fill all input fields");
      return;
    }
    var order = {
      pizzaName: pizzaName,
      sizePrice: price.value,
      customerName: customerName,
      address: address,
      number: number,
      quentity:quen,
    };
     arr.push(order)
     counter.innerText =arr.length;
   firebase.database().ref("pizza_order").push(order);
   
   alert("Your order has been placed Successfully");
  };
  firebase.database().ref("pizza_order").on("child_added", function (data) {
    var key = data.key;
    var product_name = data.val().pizzaName;
    var product_quentity = data.val().quentity;
    var product_price = data.val().sizePrice;



    var table = document.getElementById("display-products");

    table.innerHTML += `
  <tbody>
    <tr id="${key}">
       
    
      <td>${product_name}</td>
      <td>${product_quentity}</td>
      <td>${product_price} </td>
         <td>
          <button class="btn btn-danger" onclick="removepizzaProduct('${key}')">Remove</button>
        </td>



 
    </tr>
    </tbody>
  `;
  
});
function removepizzaProduct(key){
  firebase.database().ref("pizza_order/" + key).remove();
  document.getElementById(key).remove(); 
  
};
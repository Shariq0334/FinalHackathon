let search = new URLSearchParams(window.location.search).get("restaurant")
firebase.auth().onAuthStateChanged((user) => {
    // var uid = user.uid;
    firebase.database().ref(`users/${search}/products`).once('value', (data) => {
      console.log(data.val()
      )
      let products = data.val()
      console.log(data.key)
        let restaurant = document.getElementById('row')
        if(products){
            for (key in products){
                restaurant.innerHTML += `  

              <div class="card" style="width: 22rem; margin: 10px">
                <img  width="300px" height="200px" class="card-img-top" src='${products[key].profile}' alt="Card image cap">
                <div class="card-body">
                  <h2 class="card-title">${products[key].itemName}</h2>
                  <h3 class="card-title">RS: ${products[key].itemPrice}</h3>
                  <h3 class="card-text">Delivery: ${products[key].deliveryType}</h3>
                  <button onclick="addCart()" id='${products[key]}cart' class="btn btn-primary">Add to Cart</button>
                </div>
              </div>
                `    
            }
            

        }else{
            restaurant.innerHTML = `<h1>No Products Yet</h1>`
        }

      
      })
      
   
      
  

})

function addCart(){
  console.log("click")
  // let addCrt = document.getElementById(`${id}cart`)
  // console.log(addCrt)
}

  





window.addEventListener('DOMContentLoaded', () => {

      const product = [{
          i: './resources/images/rolex-1.webp',
          t: "EXPLORER II",
          d: "Oyster, 42mm, Oystersteel",
          p: '4500.00',
        },
        {
          i: './resources/images/rolex-2.webp"',
          t: "OYSTER PERPETUAL 41",
          d: "Oyster, 41 mm, Oystersteel",
          p: '5900.00',
        },
        {
          i: './resources/images/rolex-3.webp',
          t: "COSMOGRAPH DAYTONA",
          d: "Oyster, 40mm, Platinum ",
          p: '2000.00',
        }
      ];

      // function to Display the products 

      const displayProduct = (product) => {
        const product_List = document.querySelector('#product-list')
        let productDisplay = '';
        product.map((productList, index) => {
          productDisplay += `<div class="card m-3 rounded-1" id="product_${index}"">
        <img src="${productList.i}" class="card-img-top img-fluid"  alt="${productList.t}-image">
        <div class="card-body">
          <h5 class="card-title">${productList.t}</h5>
  
          <p class="card-text"><small>${productList.d} </small></p>
          <h6 class="card-subtitle mb-2 text-muted">AU$ ${productList.p}</h6>
          <input class=" text-center" type="number" min="1" value="1">
  
         
        </div>
        <div class="card-footer bg-light">

        <a href="#" class="btn btn-primary" style="background-color: #7561f5"> Add to Cart</a>
        </div>
      </div>`;
          product_List.innerHTML = productDisplay;
        });
      };

      //calling of product function
      return displayProduct(product)

    })


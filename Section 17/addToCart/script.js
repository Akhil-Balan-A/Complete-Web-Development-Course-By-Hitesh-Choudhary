document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    const productsContainer = document.getElementById("products-container");

    async function fetchProducts() {
        try {
            const productData = await fetch("https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=12&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches");

        const data = await productData.json();
        const products = data?.data?.data
        console.log( products[0].images[0])
            products.forEach(product => {
                const card = createProductCard(product);
                productsContainer.appendChild(card);
        });
            
        } catch (error) {
            console.log(error);
        }
        

    }
    fetchProducts();

    function createProductCard(product) {
      const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = product.images[0];
            img.alt = product.title;
            
            imgContainer.appendChild(img);
            productCard.appendChild(imgContainer);

            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("details-container");

            const title = document.createElement("h3");
            title.innerText = product.title;

            const price = document.createElement("p");
            price.innerText ="Price: "+ product.price+"$";

            const description = document.createElement("p");
            description.innerText = product.description;

            const addToCartBtn = document.createElement("button");
            addToCartBtn.classList.add("add-to-cart-btn");
        addToCartBtn.innerText = "Add to Cart";
            addToCartBtn.addEventListener("click", () => {
            addToCart(product);
        });

            detailsContainer.appendChild(title);
            detailsContainer.appendChild(price);
            detailsContainer.appendChild(description);
            detailsContainer.appendChild(addToCartBtn);
            
            productCard.appendChild(detailsContainer);

        return productCard;
        
        
    }
    function addToCart(product) {
      
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                qty: 1
            })
        }
        saveCart();
        renderCartItems();
    }
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    function renderCartItems() {
        const cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";//for clearing old rows as here we only appends the row data
        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty</p>";
            return;
        }
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");
            itemElement.innerHTML = `
            <div class="item-qty">
                    <h3>${item.title}</h3>
                    <span>${item.qty} Qty</span>
                </div>
                <p class="product-description">${item.title}</p>
                <p class="price">₹${item.price}</p>
                <button class="remove-btn">Remove</button>
            `;
            itemElement.querySelector(".remove-btn").addEventListener("click", () => {
                removeCartItem(item.id);
            });
                 
            cartItems.appendChild(itemElement);
           

        })

         const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);
            const totalDiv = document.createElement("div");
            totalDiv.classList.add("total");
            totalDiv.innerHTML = `<h3>Total</h3>
                <span id='total-price'>₹${totalPrice}</span>
            `;
            cartItems.appendChild(totalDiv);
    }
       function removeCartItem(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCartItems();
    }

    // Load cart on page load
    renderCartItems();


    // CART SIDEBAR
     const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCart = document.getElementById("close-cart");

    // OPEN SIDEBAR
    cartBtn.addEventListener("click", () => {
        cartSidebar.classList.add("active");
    });

    // CLOSE SIDEBAR
    closeCart.addEventListener("click", () => {
        cartSidebar.classList.remove("active");
    });



})
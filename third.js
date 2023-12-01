let cartItems = [];
        const maxItems = 8;

        function addToCart(chocolateId, price) {
            if (cartItems.length < maxItems && !cartItems.find(item => item.id === chocolateId)) {
                cartItems.push({ id: chocolateId, price: price });
                updateCartDisplay();
            } else {
                alert("You can only add up to 8 items to the cart.");
            }
        }
        function removeFromCart(chocolateId) {
            const index = cartItems.findIndex(item => item.id === chocolateId);
            if (index !== -1) {
                cartItems.splice(index, 1);
                updateCartDisplay();
            }
        }

        function updateCartDisplay() {
            const cartList = document.getElementById("cart-items");
            const selectedPriceElement = document.getElementById("selected-price");
            let selectedPrice = 0;

            cartList.innerHTML = "";

            cartItems.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `Chocolate ${item.id} - Price: $${item.price.toFixed(2)}`;
                cartList.appendChild(listItem);

                selectedPrice += item.price;
            });

            selectedPriceElement.textContent = `Selected Price: $${selectedPrice.toFixed(2)}`;
        }
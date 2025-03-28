document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let cart = [];
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.dataset.price);
            const name = button.dataset.name;

            cart.push({ name, price });
            total += price;

            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - 1 - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
        });
        totalPriceElement.textContent = total.toFixed(2);
    }
});

document.getElementById('checkout-btn').addEventListener('click', function() {
    const totalPrice = document.getElementById('total-price').textContent;
    if (parseFloat(totalPrice) > 0) {
        alert('Proceeding to checkout with total: $' + totalPrice);
        
    } else {
        alert('Your cart is empty!');
    }
});
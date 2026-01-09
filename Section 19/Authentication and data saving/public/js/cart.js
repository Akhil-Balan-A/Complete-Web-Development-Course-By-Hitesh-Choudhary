function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(p => p.productId === productId);
  if (existing) existing.qty++;
  else cart.push({ productId, qty: 1 });

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart');
}

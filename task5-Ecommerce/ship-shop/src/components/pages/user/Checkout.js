import React, { useState } from 'react';

const CheckoutPage = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, product) => sum + product.price, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Cart items:', cart);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">Checkout</div>

      <div className="cart-products">
        {cart.map((product) => (
          <div key={product.id} className="cart-product">
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* ... Your existing form fields ... */}

        <div className="checkout-total">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>

        <button className="checkout-button" type="submit">
          Checkout to Buy
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;

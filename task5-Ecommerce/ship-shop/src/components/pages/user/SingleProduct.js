import React, { useState,useEffect } from 'react';
import Layout from '../../layout/layout';
import {
  FaSquareFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaCartPlus
} from 'react-icons/fa6';


const SingleProduct = ({ addToCart  }) => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([]);

  


  const productDetails = async () => {
    try {
      let url = window.location.href;
      let pathSegments = url.split('/');
      let param = pathSegments[pathSegments.length - 1];

      const response = await fetch(`/api/getById?slug=${param}`);
      const data = await response.json();

      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Add the selected product to the cart with the specified quantity
    const item = { ...product, quantity };
    addToCart(item);
    console.log(`Added ${quantity} ${product.product_name}(s) to the cart`);
  };

  
    return (
      <Layout>
        <div className='single-product-main-content'>
          <div className='layout-singleproduct'>
            <div className='single-product-container'>
              <div className='left'>
                <img src={product.product_image} alt={product.product_name} />
              </div>
              <div className='right product-details'>
                <span className='name'>{product.product_name}</span>
                <span className='price'>&#8377; {product.price}</span>
                <br />
                <span className='desc'>{product.description}</span>
  
                <div className='cart-buttons'>
                  <div className='quantity-buttons'>
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                  </div>
                  <button className='add-to-cart' onClick={handleAddToCart}>
                    <FaCartPlus size={20} /> Add to Cart
                  </button>
                </div>
  
                <span className='divider' />
  
                <div className='info-item'>
                  <span className='text-bold'>
                    Categories: <span>{product.product_company}</span>
                  </span>
                  <span className='social-icons'>
                    Share:{' '}
                    <span>
                      <FaSquareFacebook size={16} />
                      <FaInstagram size={16} />
                      <FaWhatsapp size={16} />
                      <FaXTwitter size={16} />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}
  export default SingleProduct;
  

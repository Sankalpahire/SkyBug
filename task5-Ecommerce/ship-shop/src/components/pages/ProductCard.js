import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col-4">
      <div className="card shadow-lg card-cus1" style={{ width: '18rem' }}>
        <Link to={`/product/${product.slug}`}>
          <img src={product.product_image} className="img-fluid img-cus1" alt={product.product_name} />
        </Link>

        <div className="card-body">
          <p className="card-price">${product.price}</p>
          <Link to={`/product/${product.slug}`} className="card-title">
            {product.product_name} <br />
          </Link>
          <sub style={{ color: '#605f5ffa !important', fontSize: 12 }}>{` by ${product.product_company}`}</sub><br/>
          <span>Ratings: <span className="fw-bold">{(product.ratings) ? product.ratings : 0}</span>/5</span>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </div>


//    <div className="col-4 col-sm-6 col-12">
//         <div className="card shadow-lg card-cus1" style={{width: '22rem'}}>
//             <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid img-cus1" alt="product" />
//             <div className="card-body">
//                 <p className="card-price">$ 6000</p>
//                 <h5 className="card-title">Fuji Camera <br />
//                     <sub style={{color: '#605f5ffa !important', fontSize: 12}}> by fuji company</sub>
//                 </h5>
//                 <span>Ratings: <span className="fw-bold">4.5</span>/5</span>
//                 <p className="card-text">Fuji camera, stylish and most advanced camera!!</p>
//                 <div className="d-flex justify-content-center align-items-center">
//                     <a href="#1" className="btn btn-cus1">
//                     Add to cart
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
  );
};

export default ProductCard;


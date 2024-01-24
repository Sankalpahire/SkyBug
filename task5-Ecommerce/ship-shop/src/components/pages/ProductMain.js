import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Layout from "../layout/layout";
import ProductFilter from "./user/ProductFilter";
import ProductSort from "./user/ProductSort";

const ProductMain = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/fetch-items");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApplyFilters = (filters) => {
    // Handle filters logic 
    console.log("Applied filters:", filters);
  };

  const handleSortProducts = (sortOption) => {
    // Handle sorting logic here
    console.log("Sort option selected:", sortOption);
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="m-2">
          <div className="row">
            
            <div className="col-3" style={{ marginTop: '4rem' }}>
              <ProductFilter applyFilters={handleApplyFilters} />
            </div>

            
            <div className="col-6">
              <div className="row g-3" style={{ marginTop: '4rem' }}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

          
            <div className="col-3">
              <ProductSort sortProducts={handleSortProducts} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductMain;


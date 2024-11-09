// src/components/ProductCatalog.js

import React from 'react';
import { products } from '../productData';
import ProductCard from './ProductCard';

const ProductCatalog = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Catalog</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;

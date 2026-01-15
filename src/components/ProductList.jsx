import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductList = ({ products, onRemoveProduct }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard 
              product={product} 
              onRemove={() => onRemoveProduct(product.id)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  AppBar, 
  Toolbar,
  CssBaseline
} from '@mui/material';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.99, inStock: true },
    { id: 2, name: 'Table', price: 699.99, inStock: false },
    { id: 3, name: 'Headphones', price: 199.99, inStock: true },
    { id: 4, name: 'Keyboard', price: 89.99, inStock: false },
    { id: 5, name: 'Monitor', price: 299.99, inStock: true },
    { id: 6, name: 'Mouse', price: 49.99, inStock: true },
  ]);

  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = showInStockOnly 
    ? products.filter(product => product.inStock)
    : products;

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Dashboard
          </Typography>
          <Button 
            color="inherit"
            onClick={() => setShowInStockOnly(!showInStockOnly)}
          >
            {showInStockOnly ? 'Show All Products' : 'Show In-Stock Only'}
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Typography variant="h4" component="h1">
            Products ({filteredProducts.length})
          </Typography>
        </Box>
        
        {filteredProducts.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="textSecondary">
              No products available
            </Typography>
          </Box>
        ) : (
          <ProductList 
            products={filteredProducts} 
            onRemoveProduct={handleRemoveProduct}
          />
        )}
      </Container>
    </>
  );
}

export default App; 
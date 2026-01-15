import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  Box
} from '@mui/material';

const ProductCard = ({ product, onRemove }) => {
  const cardClassName = product.inStock 
    ? styles.productCard 
    : `${styles.productCard} ${styles.outOfStockClass}`;

  return (
    <>
      <Card 
        className={cardClassName}
        elevation={2}
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        data-testid={`product-card-${product.id}`}
        data-out-of-stock={!product.inStock}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            mb: 2 
          }}>
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom
              data-testid={`product-name-${product.id}`}
            >
              {product.name}
            </Typography>
            <Button 
              size="small" 
              onClick={onRemove}
              sx={{ color: 'error.main', minWidth: 'auto' }}
              data-testid={`remove-button-${product.id}`}
            >
              Remove
            </Button>
          </Box>
          
          <Typography 
            variant="h4" 
            component="p" 
            color="primary"
            sx={{ 
              fontWeight: 'bold',
              opacity: !product.inStock ? 0.6 : 1
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mt: 1 }}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mt: 1, fontSize: '0.75rem' }}
          >
            ID: {product.id}
          </Typography>
        </CardContent>
        
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button 
            size="medium" 
            variant="contained"
            fullWidth
            disabled={!product.inStock}
            sx={{
              backgroundColor: product.inStock ? '#1976d2' : '#9e9e9e',
              '&:hover': {
                backgroundColor: product.inStock ? '#1565c0' : '#757575'
              }
            }}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
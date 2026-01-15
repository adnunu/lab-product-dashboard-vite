import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Product Dashboard Tests', () => {
  test('renders product dashboard title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Product Dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('displays all products initially', () => {
    render(<App />);
    
    // Check for each product name
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Table')).toBeInTheDocument();
    expect(screen.getByText('Headphones')).toBeInTheDocument();
    expect(screen.getByText('Keyboard')).toBeInTheDocument();
    expect(screen.getByText('Monitor')).toBeInTheDocument();
    expect(screen.getByText('Mouse')).toBeInTheDocument();
  });

  test('applies conditional styling for out-of-stock products', () => {
    render(<App />);
    
    // Find the out-of-stock product (Phone)
    const outOfStockProduct = screen.getByText('Table');
    
    // Get the card element - NOT using closest('div'), but closest with data-testid
    const productCard = outOfStockProduct.closest('[data-testid^="product-card-"]');
    
    // The card should have the outOfStockClass
    // Since CSS Modules hashes class names, check for the data attribute instead
    expect(productCard).toHaveAttribute('data-out-of-stock', 'true');
  });

  test('removes product from the dashboard when "Remove" button is clicked', () => {
    render(<App />);
    
    // Find all "Remove" buttons
    const removeButtons = screen.getAllByText('Remove');
    
    expect(removeButtons.length).toBeGreaterThan(0);

    // Click the first remove button
    fireEvent.click(removeButtons[0]);
    
    // Check that "Remove" button count decreased
    const newRemoveButtons = screen.getAllByText('Remove');
    expect(newRemoveButtons.length).toBe(removeButtons.length - 1);
  });
});
import axios from 'axios';

// Function to fetch a list of products
export const fetchProducts = async () => {
  // Make a GET request to the API endpoint
  const { data } = await axios.get('https://fakestoreapi.com/products/');
  
  // Return the data from the API
  return data;
};

// Function to fetch details of a specific product based on its ID
export const fetchProductDetails = async (productId: number) => {
  // Make a GET request to the API endpoint for the specific product ID
  const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
  
  // Return the data for one item from the API based on item ID
  return data;
};
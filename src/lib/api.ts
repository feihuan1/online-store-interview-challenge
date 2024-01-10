import axios, { AxiosError } from "axios";


export const fetchProducts = async () => {
  try {
    // Make a GET request to the api
    const { data } = await axios.get("https://fakestoreapi.com/products/");

    // Return the data received from the API
    return data;
  } catch (error) {
    // Handle errors if the API request fails
    const axiosError = error as AxiosError;
    
    // Log the error message 
    console.error("API Error:", axiosError.message);

    // Throw the AxiosError to indicate that the API request failed
    throw axiosError;
  }
};
import {useEffect} from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from './lib/api';

function App() {
  // Use the useQuery hook to fetch products data
  const { data: products, isLoading } = useQuery('products', fetchProducts);

  // log the data out make sure query function works
  useEffect(() => {
    if (products) {
      console.log('Fetched Products:', products);
    }
  }, [products]);

  return (

        <div>
          <h1>Hello</h1>
        </div>

  );
}

export default App;
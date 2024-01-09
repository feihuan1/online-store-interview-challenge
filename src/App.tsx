import { useState } from "react";
import { Grid } from "@mui/material";
import MasterView from "./components/MasterView";
import DetailView from "./components/DetailView";
import { useQuery } from "react-query";
import { fetchProducts } from "./lib/api";
import { Product } from "./types";

function App() {

    // Fetch products using react-query
  const { data: products, isLoading } = useQuery('products', fetchProducts);

    // define State to track the selected product for detailed view
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <Grid container sx={{ maxHeight: '100vh', overflowY: 'hidden' }}>
      <MasterView products={products || []} onItemClick={handleProductClick} isLoading={isLoading} />
      <DetailView product={selectedProduct} />
    </Grid>
  );
}

export default App;

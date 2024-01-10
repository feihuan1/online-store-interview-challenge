import { useState } from "react";

import { useQuery } from "react-query";

import { Grid } from "@mui/material";
import MasterView from "./components/MasterView";
import DetailView from "./components/DetailView";

import { fetchProducts } from "./lib/api";
import { Product } from "./types";

function App() {
  // Fetch products using react-query
  const { data: products, isLoading } = useQuery("products", fetchProducts);

  // define State to track the selected product for detailed view
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Handler to update the selected product when a product is clicked
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    // Container for the entire application with styling
    <Grid
      container
      sx={{
        maxHeight: "100vh",
        overflow: "hidden",
        maxWidth: "1440px",
        border: "2px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <MasterView
        products={products || []}
        onItemClick={handleProductClick}
        isLoading={isLoading}
      />
      <DetailView product={selectedProduct} />
    </Grid>
  );
}

export default App;

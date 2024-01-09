import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Product } from "../types";

// Define the props type
interface DetailViewProps {
  product: Product | null;
}

const DetailView: React.FC<DetailViewProps> = ({ product }) => {

  return (
    <Grid item xs={12} md={8}> 
      {product ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="body1">
              {product.description}
            </Typography>
            <Typography variant="body2">{`Price: $${product.price}`}</Typography>
            <Typography variant="body2">{`Category: ${product.category}`}</Typography>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </>
      ) : (
        // If no detailed product data, show message ask user select product to view detail 
        <Typography variant="h6">Select an item to display</Typography>
      )}
    </Grid>
  );
};

export default DetailView;

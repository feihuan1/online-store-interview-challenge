import { Grid, Typography } from "@mui/material";
import { Product } from "../types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ProductRating from "./ProductRating" 
import NothingDisplay from "./NothingDisplay";

interface DetailViewProps {
  product: Product | null;
}

const DetailView = ({ product }:DetailViewProps) => {

  return (
    <Grid item xs={12} md={8}> 
      {product ? (
        <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection:"column",
          borderRadius: "8px",
          padding: "12px",
          margin: "0 0 16px",
          "&:hover": {
            borderColor: "#8e44ad",
          },
        }}
      >
        <div className="image-wrapper">
          <CardMedia
            component="img"
            sx={{
              width: "400px", 
              objectFit: "contain",
              transform: "scale(0.8)",
            }}
            image={product.image}
            alt="Product cover"
          />
        </div>
  
        <Box>
          <CardContent>
            <Typography
              color="#8e44ad"
              component="div"
              variant="h6"
              fontSize="1rem"
              lineHeight="1.2"
              fontWeight="bold"
            >
              {product.category}
            </Typography>
            <Typography
              sx={{ marginTop: "8px" }}
              component="div"
              variant="h6"
              fontSize="1.3rem"
              lineHeight="1.2"
              fontWeight="bold"
            >
              {product.title}
            </Typography>
            <Typography
              sx={{ marginTop: "8px" }}
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {product.description}
            </Typography> 

            <ProductRating rate={product.rating.rate} count={product.rating.count} productId={product.id} />

            <Typography
              sx={{ marginTop: "8px" }}
              component="div"
              variant="h5"
              fontSize="1rem"
              lineHeight="1.3"
              fontWeight="bold"
            >
              {"$" + product.price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
        
      ) : (
        // If no detailed product data, show message ask user select product to view detail 
        <NothingDisplay />
      )}
    </Grid>
  );
};

export default DetailView;

import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fade,
} from "@mui/material";

import ProductRating from "./ProductRating";
import NothingDisplay from "./NothingDisplay";

import { Product } from "../types";

interface DetailViewProps {
  product: Product | null;
}

const DetailView: React.FC<DetailViewProps> = ({ product }) => {
  // State to control the fadeIn and fadeOut effect
  const [isFadeIn, setIsFadeIn] = useState(true);

  // Effect to trigger fadeIn when the product changes
  useEffect(() => {
    setIsFadeIn(true);
  }, [product]);

  // Callback to handle fadeOut when the fade animation exits
  const handleFadeOut = () => {
    setIsFadeIn(false);
  };

  return (
    <Grid item xs={0} md={8}>
      {product ? (
        <Fade
          in={isFadeIn}
          onExited={handleFadeOut}
          timeout={1000}
          key={product?.id || "empty"}
        >
          <Card
            sx={{
              width: "95%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
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
                  sx={{ textTransform: 'capitalize' }}
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

                <ProductRating
                  rate={product.rating.rate}
                  count={product.rating.count}
                  productId={product.id}
                />

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
        </Fade>
      ) : (
        // If no detailed product data, show message ask user select product to view detail
        <NothingDisplay />
      )}
    </Grid>
  );
};

export default DetailView;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import starImage from "../assets/star.png";
import { Product } from "../types";

interface ItemCardProps {
  onItemClick: (product: Product) => void;
  product: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ product, onItemClick }) => {
  const handleItemClick = () => {
    onItemClick(product);
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: "95%",
        height: "160px",
        display: "flex",
        border: "2px solid #ccc",
        borderRadius: "8px",
        cursor: "pointer",
        padding: "12px",
        transition: "transform 0.2s, border-color 0.2s",
        margin: "0 0 16px",
        "&:hover": {
          borderColor: "#8e44ad",
        },
      }}
      onClick={handleItemClick}
    >
      <div className="rating">
        <img src={starImage} width="14px" height="14px" alt="star icon" />
        {`${product.rating.rate} (${product.rating.count})`}
      </div>
      <div className="image-wrapper">
        <CardMedia
          component="img"
          sx={{
            width: 100,
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
            fontSize="1rem"
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
            {/* nowrap attribute will apply on all Typography once applied, still looking for better solution */}
            {product.description.slice(0, 22) + "..."}
          </Typography>
          <Typography
            sx={{ marginTop: "16px" }}
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
  );
};

export default ItemCard;

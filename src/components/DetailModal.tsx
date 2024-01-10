import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";

import ProductRating from "./ProductRating";
import { Product } from "../types";

interface DetailModalProps {
  product: Product;
  handleClose: () => void;
  open: boolean;
}

const DetailModal: React.FC<DetailModalProps> = ({
  product,
  handleClose,
  open,
}) => {
  return (
    <div>
      <Modal open={open} closeAfterTransition>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "12px",
            margin: "0 0 16px",
            "&:hover": {
              borderColor: "#8e44ad",
            },
          }}
        >
          <ArrowBackSharpIcon
            sx={{
              backgroundColor: "#FFF",
              color: "#000",
              border: "2px solid #dcdcdc",
              borderRadius: "50%",
              padding: "6px",
              position: "absolute",
              top: "16px",
              left: "16px",
              zIndex: "11",
              "&:hover": {
                backgroundColor: "#dcdcdc",
              },
            }}
            onClick={handleClose}
          />
          <div className="image-wrapper modal">
            <CardMedia
              component="img"
              sx={{
                width: "150px",
                height: "auto",
                objectFit: "contain",
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
                fontSize="1.2rem"
                lineHeight="1"
                fontWeight="bold"
              >
                {product.title}
              </Typography>
              <Typography
                sx={{
                  marginTop: "8px",
                  maxHeight: "100px",
                  overflow: "scroll",
                  lineHeight: "1",
                }}
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
      </Modal>
    </div>
  );
};

export default DetailModal;

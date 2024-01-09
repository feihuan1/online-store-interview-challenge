import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface ProductRatingPropsType {
  rate: number, 
  count: number, 
  productId: number
}

export default function ProductRating({rate, count, productId}:ProductRatingPropsType) {
  return (
    <Stack 
      spacing={1}
      sx={{
        margin: "24px 0", 
        display:"flex", 
        flexDirection:"row", 
        alignItems:"end", 
        justifyContent:"start", 
        gap:"6px", 
      }}
    >
      <Rating name={`half-rating-read-${productId}`} value={rate} precision={0.1} readOnly />

      <Typography

              variant="subtitle2"
              color="text.primary"
              component="div"
            >
              {rate}
            </Typography> 
      <Typography
   
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {`${count} reviews`}
            </Typography> 
    
    </Stack>
  );
}
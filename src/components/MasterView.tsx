import {
  Grid,
  CircularProgress,
  List,
} from "@mui/material";
import ItemCard from './ItemCard'
import { Product } from "../types";

// Define the props type
interface MasterViewProps {
  onItemClick: (product: Product) => void;
  isLoading: boolean;
  products: Product[] | undefined;
}

const MasterView: React.FC<MasterViewProps> = ({
  onItemClick,
  isLoading,
  products,
}) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        overflowY: "auto",
        maxHeight: "100vh",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#bbb",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f4f4f4",
        },
      }}
    >
      {isLoading || !products ? (
        <CircularProgress />
      ) : (
        <List sx={{padding:"16px"}}>
          {products.map((product: Product) => (
             <ItemCard key={product.id} product={product} onItemClick={onItemClick} />
          ))}
        </List>
      )}
    </Grid>
  );
};

export default MasterView;

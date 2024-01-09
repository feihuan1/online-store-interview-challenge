import { Grid, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { fetchProducts } from '../lib/api';
import { queryClient } from '../lib/queryClient'; 
import { Product } from '../types';

// Define the props type 
export interface MasterViewProps {
  onItemClick: (product: Product) => void;
  isLoading: boolean;
  products: Product[] | undefined;
}


const MasterView: React.FC<MasterViewProps> = ({ onItemClick, isLoading, products }) => { 

  return (
    <Grid item xs={12} md={4}>
      {isLoading || !products ? (
        <CircularProgress />
      ) : (
        <List>
          {products.map((product: Product) => (
            <motion.div key={product.id} whileHover={{ scale: 1.05 }}>
              <ListItem component="div" onClick={() => onItemClick(product)}>
                <ListItemText primary={product.title} secondary={product.description} />
              </ListItem>
            </motion.div>
          ))}
        </List>
      )}
    </Grid>
  );
};

export default MasterView;
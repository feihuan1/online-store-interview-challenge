import React, { useState, useEffect } from "react";

import { Grid, CircularProgress, List } from "@mui/material";

import ItemCard from "./ItemCard";
import DetailModal from "./DetailModal";
import { Product } from "../types";

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
  // State to manage the visibility of detail modals for each product
  const [openModals, setOpenModals] = useState<{ [key: string]: boolean }>({});
  // State to track if the current viewport is considered as a mobile device
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Handler to open the detail modal for a specific product
  const handleOpen = (productId: string) => {
    setOpenModals((prevOpenModals) => ({
      ...prevOpenModals,
      [productId]: true,
    }));
  };

  // Handler to close the detail modal for a specific product
  const handleClose = (productId: string) => {
    setOpenModals((prevOpenModals) => ({
      ...prevOpenModals,
      [productId]: false,
    }));
  };

  // Effect to update the isMobile state based on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Detach the resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid
      item
      xs={0}
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
        <List sx={{ padding: "16px" }}>
          {products.map((product: Product) => (
            <div key={product.id}>
              <ItemCard
                product={product}
                onItemClick={() => {
                  onItemClick(product);
                  handleOpen(product.id.toString());
                }}
              />
              {isMobile && (
                <DetailModal
                  product={product}
                  open={openModals[product.id] || false}
                  handleClose={() => handleClose(product.id.toString())}
                />
              )}
            </div>
          ))}
        </List>
      )}
    </Grid>
  );
};

export default MasterView;

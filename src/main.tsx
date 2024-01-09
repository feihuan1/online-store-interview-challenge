import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClientProvider, queryClient } from "./lib/queryClient";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    {/* 
      The QueryClientProvider ensures that the queryClient instance is available 
      for use by components throughout the entire application.
    */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

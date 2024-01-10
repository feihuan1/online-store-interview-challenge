import React from "react";
import { createRoot } from "react-dom/client";

import { QueryClientProvider, queryClient } from "./lib/queryClient";

import App from "./App";
import "./index.css";

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

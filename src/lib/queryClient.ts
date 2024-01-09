import { QueryClient, QueryClientProvider } from 'react-query';

// Create a new QueryClient to manages the state of queries
const queryClient = new QueryClient();

// Export the created QueryClient for reuse 
export { queryClient, QueryClientProvider };
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ListingDetails from "./components/ListingDetails";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listings/:listingId",
    element: <Listings />,
  },
  {
    path: "/listing-details/:listingDetailsId",
    element: <ListingDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

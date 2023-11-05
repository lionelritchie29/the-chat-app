import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root";
import Auth from "./routes/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Index from "./routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Friends from "./routes/friends";
import NeedAuth from "./components/NeedAuth";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <NeedAuth>
            <Index />
          </NeedAuth>
        ),
      },
      { path: "auth", element: <Auth /> },
      {
        path: "friends",
        element: (
          <NeedAuth>
            <Friends />
          </NeedAuth>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

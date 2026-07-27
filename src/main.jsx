import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import App from "./App";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
 <ClerkProvider
  publishableKey={clerkPubKey}
  afterSignOutUrl="/"
>
  <BrowserRouter>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={2500}
      theme="colored"
    />
  </BrowserRouter>
</ClerkProvider>
);
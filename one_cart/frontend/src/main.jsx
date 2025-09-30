import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./context/authContext.jsx";
import UserProvider from "./context/UserContext.jsx";
import ShopContext from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <ShopContext>
            <App />
          </ShopContext>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

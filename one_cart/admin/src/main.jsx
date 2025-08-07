import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
import AdminContext from "./context/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext> {/* <-- Make this outer */}
        <AdminContext> {/* <-- Now this can safely use authDataContext */}
          <App />
        </AdminContext>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);


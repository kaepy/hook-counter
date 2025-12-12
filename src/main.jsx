import { StrictMode } from "react"; // Importing StrictMode from React to enable additional checks and warnings
import { createRoot } from "react-dom/client";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

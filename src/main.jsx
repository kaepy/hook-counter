import { StrictMode } from "react"; // Importing StrictMode from React to enable additional checks and warnings
import { createRoot } from "react-dom/client";

import App from "./App";
import { CounterContextProvider } from "./CounterContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>
);

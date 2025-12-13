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

// Every Provider have it's own values. For example, if there were two CounterContextProviders, each would have its own counter state and counterDispatch function.
// Components that are descendants of a specific Provider will use that Provider's value.

/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
    <CounterContextProvider>
      <AdminPage />
    </CounterContextProvider>
  </StrictMode>
);
*/

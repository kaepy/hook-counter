import { createContext } from "react";

// Luodaan Context-objekti, jota voidaan käyttää tilan jakamiseen komponenttien välillä
const CounterContext = createContext(); // Alustetaan Context, jonka arvo määritellään Provider-komponentissa

export default CounterContext;

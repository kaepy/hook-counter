import { createContext, useReducer } from "react";

// Reducer-funktio määrittelee, miten tila muuttuu eri action-tyyppien perusteella
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

// Luodaan Context-objekti, jota voidaan käyttää tilan jakamiseen komponenttien välillä
const CounterContext = createContext(); // Alustetaan Context, jonka arvo määritellään Provider-komponentissa

// Luodaan Provider-komponentti, joka käyttää useReduceriä ja jakaa tilan ja dispatcherin lapsikomponenteille
export const CounterContextProvider = (props) => {
  // props.children sisältää kaikki lapsikomponentit, jotka käyttävät tätä Provideriä
  const [counter, counterDispatch] = useReducer(counterReducer, 0); // Alkuarvo on 0

  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContext;

// Context API on eräänlainan globaalin tilanhallinnan työkalu Reactissa. Sen avulla voidaan välttää prop drilling -ilmiötä, jossa tietoa (props) joudutaan välittämään monen komponentin kautta tarpeettomasti. Context API mahdollistaa tilan jakamisen suoraan komponenttien välillä ilman, että jokaisen välikomponentin tarvitsee tietää siitä mitään.

import { useReducer } from "react";

import Display from "./components/Display";
import Button from "./components/Button";
import CounterContext from "./CounterContext";

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

const App = () => {
  // Käytetään Reactin useReducer hookkia paikalliseen tilanhallintaan
  const [counter, counterDispatch] = useReducer(counterReducer, 0); // Alkuarvo on 0

  // Käytetään Context Provideria jakamaan counter ja counterDispatch alikomponenteille
  return (
    <CounterContext.Provider value={{ counter, counterDispatch }}>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </CounterContext.Provider>
  );
};

export default App;

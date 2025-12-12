// Toteutetaan laskurin tilan hallinta Reactin sisäänrakennetun useReducer-hookin tarjoamalla Reduxin kaltaisella tilanhallintamekanismilla.

import { useReducer } from "react";

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

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={() => counterDispatch({ type: "INC" })}>+</button>
        <button onClick={() => counterDispatch({ type: "DEC" })}>-</button>
        <button onClick={() => counterDispatch({ type: "ZERO" })}>0</button>
      </div>
    </div>
  );
};

export default App;

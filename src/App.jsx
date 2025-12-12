// Tilanhallinta on määritelty tiedostossa App.jsx, josta tilanhallintaan tarvittavat arvot ja funktiot välitetään lapsikomponenteille propseina.
// Ratkaisu toimii, mutta ei ole optimaalinen. Jos komponenttirakenne monimutkaistuu, tulee esim dispatcheria välittää propsien avulla monen komponentin kautta sitä tarvitseville komponenteille siitäkin huolimatta, että komponenttipuussa välissä olevat komponentit eivät dispatcheria tarvitsisikaan. Tästä ilmiöstä käytetään nimitystä prop drilling.

import { useReducer } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

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
      <Display counter={counter} />
      <div>
        <Button dispatch={counterDispatch} type="INC" label="+" />
        <Button dispatch={counterDispatch} type="DEC" label="-" />
        <Button dispatch={counterDispatch} type="ZERO" label="0" />
      </div>
    </div>
  );
};

export default App;

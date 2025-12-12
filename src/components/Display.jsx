import { useContext } from "react";
import CounterContext from "../CounterContext";

// Destrukturoi propsit ja näytä counter-arvo
const Display = () => {
  const { counter } = useContext(CounterContext); // Haetaan counter-arvo Contextista

  return <div>{counter}</div>; // Näytetään counter-arvo
};

export default Display;

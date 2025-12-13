import { useContext } from "react";
import CounterContext from "../CounterContext";

// Destrukturoi propsit ja näytä counter-arvo
const Display = () => {
  const { counter } = useContext(CounterContext); // Haetaan counter-arvo Contextista

  // Get the current Context value passed to the nearest Provider (CounterContext.jsx: <CounterContext.Provider value={{ counter, counterDispatch }}>),
  // then take out the counter and counterDispatch properties and store them in local variables.”
  // const { counter, counterDispatch } = useContext(CounterContext);
  // SAMA PURETTUNA OSIIN:
  // const context = useContext(CounterContext);
  // const counter = context.counter;
  // const counterDispatch = context.counterDispatch;
  // This works because every Consumer gets the same value object (from the nearest Provider).
  // In this component, we only need the counter value, so we destructure only that from the context.

  return <div>{counter}</div>; // Näytetään counter-arvo
};

export default Display;

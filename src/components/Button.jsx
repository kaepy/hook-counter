import { useContext } from "react";
import CounterContext from "../CounterContext";

const Button = ({ type, label }) => {
  const { counterDispatch } = useContext(CounterContext); // Haetaan dispatcheri Contextista

  return <button onClick={() => counterDispatch({ type })}>{label}</button>;
};

export default Button;

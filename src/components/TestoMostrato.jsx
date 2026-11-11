import { useContext } from "react";
import ConsigliContext from "../context/ConsigliContext";
import { useEffect } from "react";

export default function TestoMostrato() {
  useEffect(() => {
    console.log("Componente Consiglio montato");

    return () => {
      console.log("Componente Consiglio smontato");
    };
  }, []);
  const {consiglioRandom} = useContext(ConsigliContext)
  return <p className="text-white">{consiglioRandom}</p>;
}

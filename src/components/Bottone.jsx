import { useContext } from "react";
import ConsigliContext from "../context/ConsigliContext";
export default function Bottone() {
  const {generaConsiglio} = useContext(ConsigliContext);
  return (
    <>
      <div>
        <p className="mb-8 bg-sky-300 text-black p-2.5 rounded-2xl">Dopo la tua giornata di lavoro cerca qui le tue buone abitudini per rilassarti 🌙.</p>
        <button
          className="bg-yellow-300 hover:bg-yellow-500 p-2 text-black rounded-3xl mb-4"
          onClick={generaConsiglio}
        >
          Oggi provo a..
        </button>
      </div>
    </>
  );
}

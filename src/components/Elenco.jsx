import { useContext } from "react";
import ConsigliContext from "../context/ConsigliContext";

export default function Elenco() {
    const {consigliVisualizzati} = useContext(ConsigliContext);
  return (
    <>
      <div className="flex flex-col gap-1 text-slate-700 mt-2">
        {consigliVisualizzati.map((consiglio, index) => (
          <p key={index} className="p-1 border border-black bg-sky-200 rounded-2xl">{consiglio}</p>
        ))}
      </div>
    </>
  );
}

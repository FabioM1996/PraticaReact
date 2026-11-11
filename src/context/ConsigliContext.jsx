import { useState, useEffect } from "react";
import ConsigliContext from "./ConsigliContext";

export default function ConsigliProvider({ children }) {
  const [consigliVisualizzati, setConsigliVisualizzati] = useState([]);
  const [visualizzazioni, setVisualizzazioni] = useState(0);
  const [consiglioRandom, setConsiglioRandom] = useState("");
  const [consiglioUtente, setConsiglioUtente] = useState("");

const consigli = [
  "Bevi almeno 2 litri d'acqua al giorno",
  "Fai una passeggiata di 30 minuti",
  "Dedica 10 minuti alla lettura di un libro",
  "Fai qualche esercizio di stretching al mattino",
  "Riduci il tempo trascorso sui social network",
  "Concediti una pausa di relax durante la giornata",
  "Vai a dormire sempre alla stessa ora quando possibile",
];

  useEffect(() => {
    console.log("Lista aggiornata:", consigliVisualizzati);
  }, [consigliVisualizzati]);

  const generaConsiglio = () => {
    const consiglio = consigli[Math.floor(Math.random() * consigli.length)];

    if (consigliVisualizzati.includes(consiglio)) {
      alert(`Forse hai già provato questa abitudine: "${consiglio}"`);
      return;
    }

    setConsigliVisualizzati((prev) => [...prev, consiglio]);
    setVisualizzazioni((prev) => prev + 1);
  };

  const mostraConsiglio = () => {
    const consiglio = consigli[Math.floor(Math.random() * consigli.length)];

    setConsiglioRandom(consiglio);
  };

  const inserisciConsiglio = () => {
    if (consigliVisualizzati.includes(consiglioUtente)) {
      console.warn("Consiglio già esistente");
      return;
    }

    setConsigliVisualizzati((prev) => [...prev, consiglioUtente]);

    setConsiglioUtente("");
  };

  const rimuoviConsiglio = () => {
    setConsiglioRandom("");
  };

  return (
    <ConsigliContext.Provider
      value={{
        consigliVisualizzati,
        visualizzazioni,
        consiglioRandom,
        consiglioUtente,

        setConsiglioUtente,

        generaConsiglio,
        mostraConsiglio,
        inserisciConsiglio,
        rimuoviConsiglio,
      }}
    >
      {children}
    </ConsigliContext.Provider>
  );
}

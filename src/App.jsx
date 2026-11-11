import { useEffect } from "react";
import Bottone from "./components/Bottone";
import Elenco from "./components/Elenco";
import "./App.css";
import TestoMostrato from "./components/TestoMostrato";
import { useContext } from "react";
import ConsigliContext from "./context/ConsigliContext";
import withLimit from "./HOC/withLimit";

const ElencoLimitato = withLimit(Elenco, 4);

function App() {
  // STATI
  const { consigliVisualizzati } = useContext(ConsigliContext);
  const { visualizzazioni } = useContext(ConsigliContext);
  const { consiglioRandom } = useContext(ConsigliContext);
  const { mostraConsiglio } = useContext(ConsigliContext);
  const { consiglioUtente, setConsiglioUtente } = useContext(ConsigliContext);

  // USE EFFECT
  useEffect(() => {
    console.log("Lista aggiornata:", consigliVisualizzati);
  }, [consigliVisualizzati]);

  // FUNZIONI
  const { inserisciConsiglio } = useContext(ConsigliContext);
  const { rimuoviConsiglio } = useContext(ConsigliContext);

  return (
    <>
      <div className="bg-linear-to-r from-sky-400 to-blue-700 p-1 rounded-2xl size-112 m-auto narnoor-regular">
        <div className="gradient w-full h-full p-3 rounded-2xl">
          <Bottone></Bottone>

          <input
            type="text"
            name="consiglio"
            value={consiglioUtente}
            id="consiglio"
            onChange={(e) => setConsiglioUtente(e.target.value)}
            className="bg-white p-1"
            placeholder="Aggiungi un consiglio"
          />
          <button
            onClick={inserisciConsiglio}
            className="bg-yellow-300 hover:bg-yellow-500 p-2 text-black rounded-xl mb-4 ml-3"
          >
            Add
          </button>
          <p className="text-black">
            Visualizzazioni totali: {visualizzazioni}
          </p>

          <ElencoLimitato></ElencoLimitato>
          <button
            onClick={mostraConsiglio}
            className="bg-orange-400 hover:bg-orange-500 p-2 text-black rounded-xl mb-4 ml-3 mt-1"
          >
            Mostra consiglio
          </button>

          {consiglioRandom && <TestoMostrato />}

          <button
            onClick={rimuoviConsiglio}
            className="bg-red-300 hover:bg-red-500 p-2 text-black rounded-xl mb-4 ml-3 mt-1"
          >
            Rimuovi
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

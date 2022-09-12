
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import ListadoPokemons from "./components/ListadoPokemons";
import VistaPokemon from "./components/VistaPokemon";
import BuscarPokemon from "./components/BuscarPokemon";
import { store } from "./store/store";
import HistorialPokemon from "./components/HistorialPokemon";

export default function App() {

    const client = new QueryClient();

    return (
        <Provider store={store}>
            <QueryClientProvider client={client}>
                <div className="App">
                    <h1>Pokédex</h1>
                    <div id="bandejaDeEntrada">
                        <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                            <BuscarPokemon />
                            <div style={{display: 'flex', flexDirection:'row'}}>
                                <ListadoPokemons/>
                                <VistaPokemon />
                                <HistorialPokemon/>
                            </div>
                        </div>
                    </div>
                </div>
            </QueryClientProvider>
        </Provider>
    );
}

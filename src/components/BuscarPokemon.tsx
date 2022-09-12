import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarPokemon } from "../actions/pokemonsActions";

const BuscarPokemon = () => {

    const [ search, setSearch ]= useState<string>("")
    // hook de redux para obtener el acceso al objeto dispatch
    const dispatch = useDispatch();

    return (
        <div id="buscarPokemon">
            <label>Buscar pokemon</label>
            <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} onChange={ (e) => setSearch(e.target.value) }/>
            <button onClick={() => dispatch(buscarPokemon(search))}>Buscar</button>
        </div>
    );
}

export default BuscarPokemon;
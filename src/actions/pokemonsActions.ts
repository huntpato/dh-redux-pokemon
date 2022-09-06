import { Pokemon } from "../types/pokemon.types"

export type SeleccionarPokemonType ={
    type: "SELECCIONAR_POKEMON";
    payload: {pokemon: Pokemon}
}

export type BuscarPokemonType ={
    type: "BUSCAR_POKEMON";
    payload: {name: string}
}

export const seleccionarPokemon = (pokemon: Pokemon) : SeleccionarPokemonType=>{
    return{
        type: "SELECCIONAR_POKEMON",
        payload: {pokemon: pokemon}
    }
}

export const buscarPokemon = (name: string): BuscarPokemonType =>{
    return{
        type:"BUSCAR_POKEMON",
        payload: {name: name}
    }
}
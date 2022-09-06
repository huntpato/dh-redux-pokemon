import React from "react";
import PropTypes from "prop-types";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";



interface ListadoPokemonsItemProps {
    pokemon: Pokemon,
    seleccionarPokemon: (pokemon: Pokemon) => void
}

/**
 * Visualiza una pokemon con su nombre y url
 * @param pokemon el pokemon a mostrar
 * @param seleccionarPokemon una funcion que se ejecuta al hacer click en el pokemon
 */

const ListadoPokemonsItem = ({ pokemon, seleccionarPokemon }: ListadoPokemonsItemProps) =>
    <div onClick={() => seleccionarPokemon(pokemon)}>
        <strong>{pokemon.name}</strong>
        <small> #{extractPokemonId(pokemon.url)}</small>
    </div>


ListadoPokemonsItem.propTypes = {
    pokemon:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default ListadoPokemonsItem;
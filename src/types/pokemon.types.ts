import {Sprite} from "../types/sprite.types";

/**
 * Represents a pokemon
 * @see https://pokeapi.co/api/v2/item-category
 */

 export interface Pokemon {
     name: string;
     url: string;
 }
 
 export interface PokemonWithProps extends Pokemon{
     id: number;
     sprites: Sprite
 } 
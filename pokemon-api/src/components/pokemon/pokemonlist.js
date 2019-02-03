import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './pokemonCard';

export default class PokemonList extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="row">
        <PokemonCard />
      </div>
    )
  }
}

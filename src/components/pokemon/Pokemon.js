import React, { Component } from 'react';
import axios from 'axios';

export default class Pokemon extends Component {

    state = {
        name: '',
        pokemonIndex: '',
        imageURL: '',
        types: [],
        description: '',
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            speciaattack: '',
            specialDefense: ''
        },
        height: '',
        weight: '',
        eggGroup: '',
        abilities: '',
        genderRatioMale: '',
        genderRatioFemale: '',
        evs: '',
        hatchSteps: ''
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;

        //URLS for Pokemon information
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        //Get Pokemon Information
        const pokemonResponse = await axios.get(pokemonUrl);

        const name = pokemonResponse.data.name;
        const imageURL = pokemonResponse.data.sprites.front_default;

        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        pokemonResponse.data.stats.map(stat => {
            switch (stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name} </h1>
            </div>
        )
    }
}

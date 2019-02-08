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
        });

        // Convert to feet
        const height =
            Math.round((pokemonResponse.data.height * 0.328084 + 0.0001) * 100) / 100;

        // Convet to lbs
        const weight =
            Math.round((pokemonResponse.data.weight * 0.220462 + 0.0001) * 100) / 100;

        const types = pokemonResponse.data.types.map(type => type.type.name);

        //camel case
        const abilities = pokemonResponse.data.abilities.map(ability => {
            return ability.abilities.name.toLowerCase().split('-').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        });

        const evs = pokemonResponse.data.stats.filter(stat => {
            if (stat.effort > 0) {
                return true;
            } else {
                return false;
            }
        })
            .map(stat => {
                return `${stat.effort} ${stat.stat.name}`
                    .toLowerCase()
                    .split('-')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            })
            .join(', ');
    }

    render() {
        return (
            <div>
                <h1>{this.state.name} </h1>
            </div>
        )
    }
}

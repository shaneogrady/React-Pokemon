import React, { Component } from 'react';
import styled from 'styled-components';

export default class navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top">
					<a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="test.html">Pokedex</a>
				</nav>
			</div>
		)
	}
}

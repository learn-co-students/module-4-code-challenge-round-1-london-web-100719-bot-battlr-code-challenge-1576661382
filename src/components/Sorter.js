import React, { Component } from 'react';

export default class Sorter extends Component {

	render() {

		return (

			<select
				onChange={this.props.handleChange}
				style={{marginBottom: '10px'}}
			>

				<option value='all'>All Bots</option>
				<option value='Support'>Support</option>
				<option value='Assault'>Assault</option>
				<option value='Defender'>Defender</option>

			</select>

		);

	}

}
import React, {Component, Fragment} from "react";
import BotCard from "../components/BotCard";
import Sorter from "../components/Sorter";

export default class BotCollection extends Component {

	renderBots = () => {

		return this.props.allBots.map(bot => {

			return (

				< BotCard
					bot={bot}
					handleClick={this.props.handleClick}
					key={bot.id}
				/>

			)

		})

	}

	render(){

		return (

			<Fragment>
				< Sorter handleChange={this.props.handleSorting}/>

				<div className="ui four column grid">

					<div className="row">
					
						{this.renderBots()}
					
					</div>

				</div>

			</Fragment>

		);

	}

};
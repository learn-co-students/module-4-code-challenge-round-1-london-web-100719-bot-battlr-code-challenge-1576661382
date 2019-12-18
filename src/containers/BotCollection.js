import React from "react";
import BotCard from "../components/BotCard";

export default class BotCollection extends React.Component {

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

			<div className="ui four column grid">

				<div className="row">
				
					{this.renderBots()}
				
				</div>

			</div>

		);

	}

};
import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

export default class BotsPage extends React.Component {

	constructor() {

		super();
		this.state = {

			allBots: [],
			yourBots: []

		};

	}

	fetchAllBots = () => {

		fetch(URL)
			.then(res => res.json())
			.then(allBots => this.setState({allBots}))

	}

	isBotEnlisted = (bot) => {

		let oof = this.state.yourBots.filter(myBot => myBot.id === bot.id)
		return (oof.length > 0)

	}

	enlistBot = (bot) => {

		if (this.isBotEnlisted(bot)) return

		let yourBots = [...this.state.yourBots, bot]
		this.setState({ yourBots })
		console.log('bot ENlisted')

	}

	delistBot = (bot) => {

		console.log('bot DElisted')
		let yourBots =this.state.yourBots.filter(myBot => myBot.id !== bot.id)
		this.setState({ yourBots })

	}

	componentDidMount() {

		this.fetchAllBots()

	}

	render() {

		const {allBots, yourBots} = this.state
		const {enlistBot, delistBot} = this

		return (

			<div>

				< YourBotArmy
					yourBots={yourBots}
					handleClick={delistBot}
				/>

				< BotCollection
					allBots={allBots}
					handleClick={enlistBot}
				/>

			</div>

		);

	}

}
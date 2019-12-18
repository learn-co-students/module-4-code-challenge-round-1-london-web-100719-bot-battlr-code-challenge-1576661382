import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

export default class BotsPage extends React.Component {

	constructor() {

		super();
		this.state = {

			allBots: [],
			yourBots: [],
			botToDisplay: null

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

	}

	delistBot = (bot) => {

		let yourBots =this.state.yourBots.filter(myBot => myBot.id !== bot.id)
		this.setState({ yourBots })

	}

	displaySpecificBot = (bot) => {

		this.setState({botToDisplay: bot})

	}

	displayAllBots = () => {

		this.setState({botToDisplay: null})

	}

	specificBotDetails = () => {

		return this.state.allBots.find(bot => bot.id === this.state.botToDisplay.id)

	}

	componentDidMount() {

		this.fetchAllBots()

	}

	render() {

		const {allBots, yourBots, botToDisplay} = this.state
		const {enlistBot, delistBot, displaySpecificBot, displayAllBots} = this

		return (

			<div>

				< YourBotArmy
					yourBots={yourBots}
					handleClick={delistBot}
				/>

				{botToDisplay
				?
				< BotSpecs
					bot={botToDisplay}
					enlistBot={enlistBot}
					goBackToAllBots={displayAllBots}
				/>
				:
				< BotCollection
					allBots={allBots}
					handleClick={displaySpecificBot}
				/>
				}

			</div>

		);

	}

}
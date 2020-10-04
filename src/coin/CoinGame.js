import React, { Component } from "react";
import Coin from "./Coin";
import { getRandomSide } from "./helper";

export default class CoinGame extends Component {
	static defaultProps = {
		coins: ["heads", "tails"],
	};

	constructor(props) {
		super(props);

		this.state = {
			currCoin: "Нажми на кнопку, чтобы увидеть",
			heads: 0,
			tails: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	increment() {
		const newCoin = this.props.coins[getRandomSide()];
		this.setState((st) => {
			return {
				currCoin: newCoin,
				heads: st.heads + (newCoin === "heads" ? 1 : 0),
				tails: st.tails + (newCoin === "tails" ? 1 : 0),
			};
		});
	}

	handleClick(e) {
		this.increment();
	}

	render() {
		return (
			<div>
				<Coin side={this.state.currCoin} />
				<button onClick={this.handleClick}>Подбросить монетку!</button>
				<p>
					Монета подброшено {this.state.heads + this.state.tails} раз. Всего
					выпало: орел - {this.state.tails}, решка - {this.state.heads}.
				</p>
			</div>
		);
	}
}

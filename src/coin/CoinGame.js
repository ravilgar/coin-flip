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
			isBtnDisabled: false,
		};

		this.handleClick = this.handleClick.bind(this);
		this.changeBtn = this.changeBtn.bind(this);
	}

	increment() {
		const newCoin = this.props.coins[getRandomSide()];
		this.setState((st) => {
			return {
				currCoin: newCoin,
				heads: st.heads + (newCoin === "heads" ? 1 : 0),
				tails: st.tails + (newCoin === "tails" ? 1 : 0),
				isBtnDisabled: !st.isBtnDisabled,
			};
		});
	}
	changeBtn() {
		this.setState((st) => {
			return {
				isBtnDisabled: !st.isBtnDisabled,
			};
		});
	}

	handleClick(e) {
		this.increment();
		setTimeout(this.changeBtn, 2000);
	}

	render() {
		return (
			<div>
				<Coin
					side={this.state.currCoin}
					isFlipping={this.state.isBtnDisabled}
				/>
				<button onClick={this.handleClick} disabled={this.state.isBtnDisabled}>
					{this.state.isBtnDisabled === false
						? "Подбросить монетку!"
						: "Подождите немного"}
				</button>
				<p>
					Монета подброшено {this.state.heads + this.state.tails} раз. Всего
					выпало: орел - {this.state.tails}, решка - {this.state.heads}.
				</p>
			</div>
		);
	}
}

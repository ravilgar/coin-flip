import React, { Component } from "react";
import side1 from "../public/coin-side-1.png";
import side2 from "../public/coin-side-2.png";
import "./Coin.css";

export default class Coin extends Component {
	render() {
		// путь до картинок

		const msg = !(
			this.props.side === "heads" || this.props.side === "tails"
		) ? (
			<h1>Нажми на кнопку</h1>
		) : (
			<img
				src={this.props.side === "heads" ? side1 : side2}
				className="Coin-img"
				alt={this.props.side}
			/>
		);

		return <div className="Coin">{msg}</div>;
	}
}

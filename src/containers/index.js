import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting"

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
			</div>
		);
	}
}

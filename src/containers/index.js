import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting"
import Skills from "./skills"

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Skills />
			</div>
		);
	}
}

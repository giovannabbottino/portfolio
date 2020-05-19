import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting";
import Skills from "./skills";
import Experiences from "./experience";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Skills />
				<Experiences />
			</div>
		);
	}
}

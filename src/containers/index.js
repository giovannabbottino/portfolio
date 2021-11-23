import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting";
import Profile from "./profile";
import Footer from "../components/footer";
import Top from "../components/topbutton";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Profile />
				<Footer />
				<Top />
			</div>
		);
	}
}

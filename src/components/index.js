import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting";
import Skills from "./skills";
import Experiences from "./experience";
import Profile from "./profile";
import Footer from "../components/footer";
import Top from "../components/topbutton";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Skills />
				<Experiences />
				<Profile />
				<Footer />
				<Top />
			</div>
		);
	}
}

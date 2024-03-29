import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting";
import Profile from "./profile";
import Footer from "../components/footer";
import Top from "../components/topbutton";

import Project from "./projects";
import Certification from "./certification";
import Talk from "./talks";
import Academic from "./academic";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Project />
				<Certification />
				<Talk />
				<Academic />
				<Profile />
				<Footer />
				<Top />
			</div>
		);
	}
}

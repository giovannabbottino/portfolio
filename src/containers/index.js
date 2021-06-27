import React, { Component } from "react";

import Header from "../components/header/";
import Greeting from "./greeting";
import Skills from "./skills";
import Experiences from "./experience";
import Profile from "./profile";
import Footer from "../components/footer";
import Top from "../components/topbutton";
import EducationSection from "./educationSection";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Greeting />
				<Skills />
				<Experiences />
				<EducationSection />
				<Profile />
				<Footer />
				<Top />
			</div>
		);
	}
}

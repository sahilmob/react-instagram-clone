import React, { Component } from "react";
import Header from "../../components/Header/Herder";
import UserInfo from "../../components/UserInfo/userInfo";
import ProfileMAinContentNav from "../../components/ProfileMainContentNav/ProfileMainContentNav";
import Posts from "../../components/Posts/Posts";
import IgTv from "../../components/IgTv/IgTv";

export default class Profile extends Component {
	state = {
		activeSectionId: "posts"
	};

	renderPosts = () => {
		const { activeSectionId } = this.state;
		switch (activeSectionId) {
			case "posts":
				return <Posts />;
			case "igTv":
				return <IgTv />;
			case "saved":
				return <Posts />;
			case "taged":
				return <Posts />;
			default:
				return <Posts />;
		}
	};

	onNavItemClicked = event => {
		if (!event.target.getAttribute("name")) {
			this.setState({
				activeSectionId: event.target.parentNode.getAttribute("name")
			});
		} else {
			this.setState({
				activeSectionId: event.target.getAttribute("name")
			});
		}
	};

	render() {
		const { activeSectionId } = this.state;

		return (
			<div>
				<Header />
				<UserInfo />
				<ProfileMAinContentNav
					itemClicked={this.onNavItemClicked}
					activeSectionId={activeSectionId}
				/>
				{this.renderPosts()}
			</div>
		);
	}
}

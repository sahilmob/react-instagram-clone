import React, { Component } from "react";
import Header from "../../components/Header/Herder";
import FeedPost from "../../components/FeedPost/FeedPost";
import classes from "./Feed.css";

export default class Feed extends Component {
	render() {
		return (
			<div className={classes.container}>
				<Header />
				<div className={classes.content}>
					<div className={classes.left}>
						<FeedPost />
					</div>
					<div className={classes.right}>
						<h1>right</h1>
					</div>
				</div>
			</div>
		);
	}
}

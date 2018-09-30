import React, { Component } from "react";
import classes from "./Posts.css";
import PostItem from "../PostItem/PostItem";
import { withRouter } from "react-router-dom";
class Posts extends Component {
	state = {
		images: []
	};
	componentDidMount() {
		this.setState({
			images: this.props.location.state.images
		});
	}

	renderPosts = () => {
		const posts = [];
		this.state.images.map((img, i) => {
			posts.push(<PostItem key={i} source={img} likes="32" comments="15" />);
		});
		return posts;
	};

	render() {
		return <div className={classes.container}>{this.renderPosts()}</div>;
	}
}

export default withRouter(Posts);

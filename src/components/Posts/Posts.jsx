import React, { Component } from "react";
import classes from "./Posts.css";
import PostItem from "../PostItem/PostItem";
// import img1 from '../../static/img/1.jpg'
// import img2 from '../../static/img/2.jpg'
// import img3 from '../../static/img/3.jpg'
// import img4 from '../../static/img/4.jpg'
// import img5 from '../../static/img/5.jpg'
// import img6 from '../../static/img/6.jpg'
import axios from "axios";
export default class Posts extends Component {
	state = {
		images: []
	};
	componentDidMount() {
		axios
			.get("https://react-instagram-nodejs-api.herokuapp.com/images")
			.then(res => {
				this.setState({
					images: res.data
				});
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
		return (
			<div className={classes.container} {...this.props}>
				{this.renderPosts()}
			</div>
		);
	}
}

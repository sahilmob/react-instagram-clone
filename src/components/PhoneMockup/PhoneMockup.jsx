import React, { Component } from "react";
import classes from "./PhoneMockup.css";
import slide1 from "../../static/img/slide1.jpg";
import slide2 from "../../static/img/slide2.jpg";
import slide3 from "../../static/img/slide3.jpg";
import slide4 from "../../static/img/slide4.jpg";

export default class PhoneMockup extends Component {
	state = {
		activeSlide: 1
	};
	componentDidMount() {
		window.setInterval(this.slider, 5000);
	}

	slider = () => {
		let { activeSlide } = this.state;
		if (activeSlide < 4) {
			this.setState({
				activeSlide: activeSlide + 1
			});
		} else {
			this.setState({
				activeSlide: 1
			});
		}
	};

	render() {
		let { activeSlide } = this.state;
		return (
			<div className={classes.container}>
				<img
					src={slide1}
					alt="slide"
					className={activeSlide === 1 ? classes.slideActive : classes.slide}
				/>
				<img
					src={slide2}
					alt="slide"
					className={activeSlide === 2 ? classes.slideActive : classes.slide}
				/>
				<img
					src={slide3}
					alt="slide"
					className={activeSlide === 3 ? classes.slideActive : classes.slide}
				/>
				<img
					src={slide4}
					alt="slide"
					className={activeSlide === 4 ? classes.slideActive : classes.slide}
				/>
			</div>
		);
	}
}

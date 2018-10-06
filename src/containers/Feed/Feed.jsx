import React, { Component } from "react";
import Header from "../../components/Header/Herder";
import FeedPost from "../../components/FeedPost/FeedPost";
import Stroy from '../../components/Story/Story'
import classes from "./Feed.css";
import userAvatar from '../../static/img/user.jpg'
import avatar1 from '../../static/img/avatar1.svg'
import avatar2 from '../../static/img/avatar2.svg'
import avatar3 from '../../static/img/avatar3.svg'
import avatar4 from '../../static/img/avatar4.svg'
import avatar5 from '../../static/img/avatar5.jpg'
import avatar6 from '../../static/img/avatar6.jpeg'
import avatar7 from '../../static/img/avatar7.jpg'
import avatar8 from '../../static/img/avatar8.jpeg'
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
						<div className={classes.user}>
							<img src={userAvatar} alt="userimage" className={classes.userAvatar} />
							<span className={classes.text}>
								<span className={classes.username}>jhonDoe</span>
								<span className={classes.name}>Jhon Doe</span>
							</span>
						</div>
						<div className={classes.stories}>
							<div className={classes.storiesTop}>
								<span className={classes.storiesTitle}>Stories</span>
								<span className={classes.watchAll}>Watch All</span>
							</div>
							<div className={classes.storiesContianer}>
								<Stroy avatar={avatar1} username="Comagarsur" time="1 hour ago" />
								<Stroy avatar={avatar2} username="Hicharach" time="5 hours ago" />
								<Stroy avatar={avatar3} username="Taurus" time="3 hours ago" />
								<Stroy avatar={avatar4} username="Exch1949" time="8 hours ago" />
								<Stroy avatar={avatar5} username="Suname" time="12 hours ago" />
								<Stroy avatar={avatar6} username="Winfievanded48" time="15 hours ago" />
								<Stroy avatar={avatar7} username="Sawasty" time="10 hours ago" />
								<Stroy avatar={avatar8} username="ilaix0uaGoghie" time="17 hours ago" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

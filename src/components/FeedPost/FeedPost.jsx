import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./FeedPost.css";
import avatar1 from "../../static/img/avatar1.svg";
import image1 from "../../static/img/1.jpg";
export default class FeedPost extends Component {
	render() {
		return (
			<div className={classes.contianer}>
				<div className={classes.top}>
					<img src={avatar1} className={classes.avatar} alt="avatar" />
					<span className={classes.username}>Sulphorous</span>
				</div>
				<div className={classes.center}>
					<img src={image1} className={classes.postImg} alt="postimage" />
				</div>
				<div className={classes.bottom}>
					<div className={classes.postIcons}>
						<span className={classes.postIconsLeft}>
							<FontAwesomeIcon className={classes.icon} icon="heart" />
							<FontAwesomeIcon className={classes.icon} icon="comment" />
							<FontAwesomeIcon className={classes.icon} icon="upload" />
						</span>
						<span className={classes.postIconsRight}>
							<FontAwesomeIcon className={classes.icon} icon="bookmark" />
						</span>
					</div>
					<div className={classes.likes}>146 likes</div>
					<div className={classes.comments}>
						<div className={classes.comment}>
							<b className={classes.commentUsername}>Abderian</b>
							<span className={classes.commentText}>
								Donec volutpat porttitor pretium. Vestibulum.
							</span>
						</div>
						<div className={classes.comment}>
							<b className={classes.commentUsername}>Woofits</b>
							<span className={classes.commentText}>
								Donec lacinia nulla vel libero varius eleifend. Integer
								accumsan, ipsum facilisis efficitur.
							</span>
						</div>
						<div className={classes.comment}>
							<b className={classes.commentUsername}>Chatelaine</b>
							<span className={classes.commentText}>
								Praesent quis commodo arcu. Sed pulvinar maximus ipsum nec
								scelerisque. Ut pulvinar hendrerit nisl, in ullamcorper nulla
								porta.
							</span>
						</div>
						<div className={classes.comment}>
							<b className={classes.commentUsername}>Acrimony</b>
							<span className={classes.commentText}>
								Sed feugiat eget elit id laoreet. Suspendisse convallis gravida
								porta. Ut magna metus.
							</span>
						</div>
					</div>
					<div className={classes.commentSection}>
						<input
							name="comment"
							className={classes.commentInput}
							placeholder="Add a comment"
						/>
						<div className={classes.options}>
							<span className={classes.dot} />
							<span className={classes.dot} />
							<span className={classes.dot} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

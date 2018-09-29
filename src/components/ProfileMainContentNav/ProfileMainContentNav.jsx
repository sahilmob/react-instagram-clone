import React from "react";
import classes from "./ProfileMainContentNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
	const { itemClicked, activeSectionId } = props;
	return (
		<div className={classes.container}>
			<div
				className={
					activeSectionId === "posts" ? classes.navItemActive : classes.navItem
				}
				name="posts"
				onClick={itemClicked}
			>
				<FontAwesomeIcon
					className={classes.navItemIcon}
					icon="th"
					name="posts"
				/>
				<span className={classes.navItemText} name="posts">
					posts
				</span>
			</div>
			<div
				className={
					activeSectionId === "igTv" ? classes.navItemActive : classes.navItem
				}
				name="igTv"
				onClick={itemClicked}
			>
				<FontAwesomeIcon
					className={classes.navItemIcon}
					icon="tv"
					name="igTv"
				/>
				<span className={classes.navItemText} name="igTv">
					igtv
				</span>
			</div>
			<div
				className={
					activeSectionId === "saved" ? classes.navItemActive : classes.navItem
				}
				name="saved"
				onClick={itemClicked}
			>
				<FontAwesomeIcon
					className={classes.navItemIcon}
					icon="bookmark"
					name="saved"
				/>
				<span className={classes.navItemText} name="saved">
					saved
				</span>
			</div>
			<div
				className={
					activeSectionId === "taged" ? classes.navItemActive : classes.navItem
				}
				name="taged"
				onClick={itemClicked}
			>
				<FontAwesomeIcon
					className={classes.navItemIcon}
					icon="id-badge"
					name="taged"
				/>
				<span className={classes.navItemText} name="taged">
					taged
				</span>
			</div>
		</div>
	);
};

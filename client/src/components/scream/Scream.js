/** @format */

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import DeleteScream from './DeleteScream';
import ScreamDialog from './ScreamDialog';
import LikeButton from './LikeButton';
// Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// Icons
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { connect } from 'react-redux';


const styles = {
	card: {
		display: "flex",
        marginBottom: 10,
		position: 'relative',
		padding: '1%',
	},
	image: {
		minWidth: 160,
		height: 160,
		//borderRadius: '5%',
		//marginLeft:10
   		//objectFit: 'cover'
	},
	content: {
		
		objectFit: "cover",
	},
	grey: {
		color: 'grey'
	}
};

class Scream extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			classes,
			screams: {
				body,
				createdAt,
				userImage,
				userHandle,
				screamId,
				likeCount,
				commentCount,
            },
            user: {
                authenticated,
                credentials: { handle, role }
              }
        } = this.props;
        
        const deleteButton =
      authenticated && (userHandle === handle || role === 'ADMIN') ? (
        <DeleteScream screamId={screamId} />
      ) : null;

		return (
			<Card className={classes.card}>
				<CardMedia
					image={userImage}
					title='Profile Image'
					className={classes.image}
				/>
				<CardContent className={classes.content}>
					<Typography
						color='primary'
                        component={Link}
                        variant="h5"
						to={`/users/${userHandle}`}>
						{userHandle}
					</Typography>
                    {deleteButton}
					<Typography variant='body2' className={classes.grey}>
						{dayjs(createdAt).fromNow()}
					</Typography>
					<Typography variant='body1'>{body}</Typography>
                    <LikeButton screamId={screamId} />
                    <span>{likeCount} Likes</span>
                    <MyButton tip="comments">
                        <ChatIcon color="primary" />
                    </MyButton>
                    <span>{commentCount} comments</span>
                    <ScreamDialog
                        screamId={screamId}
                        userHandle={userHandle}
                        openDialog={this.props.openDialog}
                    /> 
				</CardContent>
			</Card>
		);
	}
}

Scream.propTypes = { 
    user: PropTypes.object.isRequired,
    screams: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    openDialog: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    user: state.user
  });


  
  
  export default connect(mapStateToProps)(withStyles(styles)(Scream));

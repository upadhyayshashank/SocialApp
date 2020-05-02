/** @format */

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton'; // ../../util
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
//Icons
import HomeIcon from '@material-ui/icons/Home';


const styles = {
	appTitle: {
		margin: 0,
		position: 'absolute',
		top: '30%',
		left: '5%',
		cursor: 'pointer',
		fontSize: 'large'
		
	}
};

class Navbar extends Component {
	render() {
		const { authenticated, classes } = this.props;
		return (
			<AppBar><h2 className={classes.appTitle}>SOCIAL APP</h2>
				<Toolbar className='nav-container'>
					{authenticated ? (
						<Fragment>
						<PostScream />
						<Link to="/">
						  <MyButton tip="Home">
							<HomeIcon />
						  </MyButton>
						</Link>
							<Notifications/>
					  	</Fragment>
					) : (
					<Fragment>
						<Button color='inherit' component={Link} to='/'>
						Home
					</Button>
					<Button color='inherit' component={Link} to='/login'>
						Login
					</Button>
					<Button color='inherit' component={Link} to='/signup'>
						Signup
					</Button>
					</Fragment>
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

Navbar.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	classes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
	authenticated: state.user.authenticated
  });
  
  export default connect(mapStateToProps)(withStyles(styles)(Navbar));

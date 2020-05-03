/** @format */

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

import Scream from "../components/scream/Scream";
import Profile from "../components/profile/Profile";
import ScreamSkeleton from "../util/ScreamSkeleton";
import Button from "@material-ui/core/Button";

import { connect } from 'react-redux';
import store from '../redux/store'
import { getScreams } from '../redux/actions/dataActions';

class home extends Component {
	componentDidMount() {
		const startAt = (new Date()).toISOString()
  		const limit = 5
		this.props.getScreams(startAt, limit, true);
	}

	loadMoreScreams = () => {
		let startAt = store.getState().data.screams[store.getState().data.screams.length - 1].createdAt
		let limit = 5
		store.dispatch(getScreams(startAt, limit))
	}

	render() {
		const { screams, loading } = this.props.data;
		let recentScreamsMarkup = !loading ? (
			screams.map((screams) => 
				<Scream key={screams.screamId} screams={screams} />
			)
		) : (
		<ScreamSkeleton />
			);
			
		
		return (
			<Grid container spacing={4}>
				<Grid item sm={8} xs={12}>
					{recentScreamsMarkup}
					<Button color="primary" onClick={() => this.loadMoreScreams()}>Load more screams</Button>
				</Grid>
				<Grid item sm={4} xs={12}>
					<Profile/>
				</Grid>
			</Grid>
		);
	}
}

home.propTypes = {
	getScreams: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
	data: state.data
  });
  
  export default connect(
	mapStateToProps,
	{ getScreams }
  )(home);

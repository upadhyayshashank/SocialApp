/** @format */

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

import Scream from "../components/scream/Scream";
import Profile from "../components/profile/Profile";
<<<<<<< HEAD
import ScreamSkeleton from "../util/ScreamSkeleton";
=======
>>>>>>> a815ad6b8830adfb047a0b95e20cf7f63053bcac

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

class home extends Component {
	componentDidMount() {
		this.props.getScreams();
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

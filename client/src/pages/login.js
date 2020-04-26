/** @format */

import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
//Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
	form: {
		textAlign: "center",
	},
	image: {
		margin: "20px auto",
	},
	pageTile: {
		margin: "15px auto",
	},
	TextField: {
		margin: "10px auto",
	},
	button: {
		marginTop: 20,
        marginBottom: 20,
        position: "relative"
	},
	customError: {
		color: "red",
		fontSize: "0.9rem",
    },
    progress: {
        position: "absolute"
    }
};

class login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {},
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			loading: true,
		});
		const userData = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post("/login", userData)
			.then((res) => {
				console.log(res.data);
				this.setState({
					loading: false,
				});
				this.props.history.push("/");
			})
			.catch((err) => {
				this.setState({
					errors: err.response.data,
					loading: false,
				});
			});
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Grid container className={classes.form}>
				<Grid item sm />
				<Grid item sm>
					<img
						src={AppIcon}
						alt='SocialApp'
						title='Social App'
						className={classes.image}
					/>
					<Typography variant='h2' className={classes.pageTitle}>
						Login
					</Typography>
					<form noValidate onSubmit={this.handleSubmit}>
						<TextField
							id='email'
							name='email'
							type='email'
							label='Email'
							className={classes.TextField}
							helperText={errors.email}
							error={errors.email ? true : false}
							value={this.state.email}
							onChange={this.handleChange}
							fullWidth
						/>
						<TextField
							id='password'
							name='password'
							type='password'
							label='Password'
							className={classes.TextField}
							helperText={errors.password}
							error={errors.password ? true : false}
							value={this.state.password}
							onChange={this.handleChange}
							fullWidth
						/>
						{errors.general && (
							<Typography variant='body2' className={classes.customError}>
								{errors.general}
							</Typography>
						)}
						<Button
							type='submit'
							variant='contained'
							color='primary'
                            className={classes.button}
                            disabled={loading}
                            >
							LOGIN
							{loading && (
								<CircularProgress size={30} className={classes.progress} />
							)}
						</Button>
						<br />
						<small>
							don't have an account? Signup <Link to='/signup'>here</Link>
						</small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		);
	}
}

login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);

/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
//Components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";
//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#33c9dc",
			main: "#2196f3",
			dark: "#008394",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff6333",
			main: "#2196f3",
			dark: "#b22a00",
			contrastText: "#fff",
		},
	},
	typography: {
		useNextVariants: true,
  },
  
});

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		window.location.href = "/login";
		authenticated = false;
	} else {
		authenticated = true;
	}
}

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<div className='App'>
				<Router>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={home} />
							<AuthRoute
								exact
								path='/login'
								component={login}
								authenticated={authenticated}
							/>
							<AuthRoute
								exact
								path='/signup'
								component={signup}
								authenticated={authenticated}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		</MuiThemeProvider>
	);
}

export default App;

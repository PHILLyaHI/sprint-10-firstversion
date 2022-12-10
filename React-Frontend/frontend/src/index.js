import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Register from './components/auth/register';
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Single from "./components/videos/single";
import Search from './components/videos/search';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';
import Chat from './components/videos/chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/admin/create" component={Create} />
				<Route exact path="/admin/edit/:id" component={Edit} />
				<Route exact path="/admin/delete/:id" component={Delete} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/logout" component={Logout} />
				<Route exact path="/video/:id" component={Single} />
				<Route path="/search" component={Search} />
				<Route path="/chat" component={Chat} />
			</Switch>
		</React.StrictMode>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();

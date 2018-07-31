import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes.component';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('root'),
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

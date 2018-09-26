import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes.component'

ReactDOM.render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('root'),
)

injectGlobal`
	@import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');	
  	body {
    	margin: 0;
		padding: 0;
		font-family: Roboto, sans-serif;
  	}

	.opened {
		background-color: #C2C2C2 !important;
	}
`

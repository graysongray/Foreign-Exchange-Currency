import React, { Component } from 'react';
import ForeignExchangeMain from './components/ForeignExchangeMain/ForeignExchangeMain';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner);

class App extends Component {
	render(){
		return(
			<ForeignExchangeMain/>
		)
	}
}
export default App;
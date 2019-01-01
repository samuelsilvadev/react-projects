import React from 'react';

import MarkdownEditor from './components/markdown/markdown-editor';

import './App.css';

class App extends React.Component {
	state = {
		value: '',
	};

	render() {
		const { value } = this.state;

		return (
			<MarkdownEditor value={ value } handleOnChange={ this._handleOnChange } />
		);
	}

	_handleOnChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}
}

export default App;

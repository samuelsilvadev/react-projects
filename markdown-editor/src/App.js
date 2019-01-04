import React from 'react';
import marked from 'marked';

import MarkdownEditor from './components/markdown/markdown-editor';

import './App.css';

class App extends React.Component {
	state = {
		value: '',
	};

	render() {
		return (
			<MarkdownEditor value={ this._getValue } handleOnChange={ this._handleOnChange } />
		);
	};

	_getValue = () => ({
		__html: marked(this.state.value)
	});

	_handleOnChange = (event) => {
		this.setState({
			value: event.target.value
		})
	};
}

export default App;

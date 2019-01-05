import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';

import MarkdownEditor from './components/markdown/markdown-editor';

import './App.css';

marked.setOptions({
	highlight: function(code) {
	  return highlight.highlightAuto(code).value;
	},
});

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

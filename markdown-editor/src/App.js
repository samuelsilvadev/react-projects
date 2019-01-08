import React from 'react';
import marked from 'marked';

import MarkdownEditor from './components/markdown/markdown-editor';

import './App.css';


import('highlight.js').then((highlight) => {
	marked.setOptions({
		highlight: function(code, lang) {
			if(lang && highlight.getLanguage(lang)) {
				return highlight.highlight(lang, code).value;
			}
		  	return highlight.highlightAuto(code).value;
		},
	});
});

class App extends React.Component {
	state = {
		value: '',
	};

	render() {
		return (
			<MarkdownEditor getValue={ this._getValue } handleOnChange={ this._handleOnChange } />
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

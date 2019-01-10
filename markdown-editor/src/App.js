import React from 'react';
import marked from 'marked';

import MarkdownEditor from './components/markdown/markdown-editor';

import { loadData, persistData } from './locaStorage';

import './App.css';

const LOCAL_STORAGE_KEY = 'md';

import('highlight.js').then((highlight) => {
	marked.setOptions({
		highlight: function(code, lang) {
			if (lang && highlight.getLanguage(lang)) {
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

	componentDidMount() {
		this.setState({
			value: loadData(LOCAL_STORAGE_KEY),
		});
	}

	componentDidUpdate() {
		const { value } = this.state;

		persistData({ key: LOCAL_STORAGE_KEY, value });
	}

	render() {
		const { value } = this.state;

		return (
			<MarkdownEditor value={ value } getValue={ this._getValue } handleOnChange={ this._handleOnChange } />
		);
	}

	_getValue = () => ({
		__html: marked(this.state.value)
	});

	_handleOnChange = (event) => {
		this.setState({
			value: event.target.value
		});
	};
}

export default App;

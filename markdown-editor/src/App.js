import React from 'react';
import marked from 'marked';

import MarkdownEditor from './components/markdown/markdown-editor';

import { loadData, persistData } from './locaStorage';

import './App.css';

const LOCAL_STORAGE_KEY = 'md';
const TIME_TO_SAVE = 1500;

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
		clearTimeout(this.timer);
		this.timer = setTimeout(this._saveData, TIME_TO_SAVE);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	render() {
		const { value } = this.state;

		return (
			<MarkdownEditor
				value={ value }
				getValue={ this._getValue }
				handleOnChange={ this._handleOnChange }
				handleOnClick={ this._saveData } />
		);
	}

	_saveData = () => {
		const { value } = this.state;

		persistData({ key: LOCAL_STORAGE_KEY, value });
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

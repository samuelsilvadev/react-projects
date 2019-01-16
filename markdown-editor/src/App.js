import React from 'react';
import marked from 'marked';

import MarkdownEditor from './pages/markdown/markdown-editor';

import { loadData, persistData, removeData } from './locaStorage';

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
		isSaving: null,
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
		const { value, isSaving } = this.state;

		return (
			<MarkdownEditor
				value={ value }
				isSaving={ isSaving }
				getValue={ this._getValue }
				handleOnChange={ this._handleOnChange }
				handleOnCreate={ this._createNewFile }
				handleOnSave={ this._saveData }
				handleOnDelete={ this._removeData } />
		);
	}

	_createNewFile = () => {

	}

	_saveData = () => {
		const { value, isSaving } = this.state;
		
		if (isSaving) {
			persistData({ key: LOCAL_STORAGE_KEY, value });

			this.setState({
				isSaving: false,
			});
		}
	}

	_removeData = () => {
		removeData(LOCAL_STORAGE_KEY);

		this.setState({
			value: '',
			isSaving: null,
		});
	}

	_getValue = () => ({
		__html: marked(this.state.value || '')
	});

	_handleOnChange = (event) => {
		this.setState({
			value: event.target.value,
			isSaving: true,
		});
	};
}

export default App;

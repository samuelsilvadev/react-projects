import React from 'react';
import marked from 'marked';
import { v4 } from 'node-uuid';

import MarkdownEditor from './pages/markdown/markdown-editor';

import { persistData, removeData } from './locaStorage';

import './App.css';

const TIME_TO_SAVE = 1500;
const GET_INITIAL_STATE = () => ({
	id: v4(),
	value: '',
});

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
		...GET_INITIAL_STATE(),
		isSaving: null,
	};

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

	_getValue = () => ({
		__html: marked(this.state.value || '')
	});

	_createNewFile = () => {
		this.setState({
			...GET_INITIAL_STATE(),
		});
	}

	_saveData = () => {
		const { id, isSaving, value } = this.state;
		
		if (isSaving) {
			persistData({ key: id, value });

			this.setState({
				isSaving: false,
			});
		}
	}

	_removeData = () => {
		const { id } = this.state;

		removeData(id);

		this.setState({
			...GET_INITIAL_STATE(),
			isSaving: null,
		});
	}

	_handleOnChange = (event) => {
		const value = event.target.value;

		this.setState((prevState) => ({
			id: prevState.id,
			isSaving: true,
			value,
		}));
	};
}

export default App;

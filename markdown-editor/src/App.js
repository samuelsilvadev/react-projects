import React from 'react';
import marked from 'marked';
import { v4 } from 'node-uuid';

import MarkdownEditor from './pages/markdown/markdown-editor';

import { loadData, persistData, removeData } from './locaStorage';

import './App.css';

const KEY_STORAGE_REGEX = /.{8}-.{4}-.{4}-.{4}-.{12}/gi;
const TIME_TO_SAVE = 1500;
const GET_INITIAL_STATE = () => ({
	id: v4(),
	title: '',
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
		files: {},
		isSaving: null,
	};

	componentDidMount() {
		this._getFilesFromStorage();
	}

	componentDidUpdate() {
		clearTimeout(this.timer);
		this.timer = setTimeout(this._saveData, TIME_TO_SAVE);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	render() {
		const { value, isSaving, files } = this.state;

		return (
			<MarkdownEditor
				value={ value }
				isSaving={ isSaving }
				getValue={ this._getValue }
				handleOnChange={ this._handleOnChange }
				handleOnCreate={ this._createNewFile }
				handleOnDelete={ this._removeData }
				handleOpenFile={ this._handleOpenFile }
				files={ files } />
		);
	}

	_getFilesFromStorage() {
		const files = Object.keys(localStorage).reduce((acc, key) => {
			const hasMatched = key.match(KEY_STORAGE_REGEX);

			if (hasMatched) {
				return {
					...acc,
					[key]: loadData(key),
				}
			}

			return {
				...acc,
			}
		}, {})
		
		this.setState({ files });
	};

	_getValue = () => ({
		__html: marked(this.state.value || '')
	});

	_createNewFile = () => {
		this.setState({
			...GET_INITIAL_STATE(),
		});
	}

	_saveData = () => {
		const { id: key, isSaving, title, value, files } = this.state;
		
		if (isSaving) {
			persistData({ key, value: { title, content: value } });

			this.setState({
				isSaving: false,
				files: {
					...files,
					[key]: { title, content: value },
				},
			});
		}
	}

	_removeData = () => {
		const { id, files: { [id]: idToRemove, ...remainingFiles } } = this.state;
		
		removeData(id);

		this.setState({
			isSaving: null,
			...GET_INITIAL_STATE(),
			files: {
				...remainingFiles,
			},
		});
	}

	_handleOnChange = (event) => {
		const value = event.target.value;

		this.setState((prevState) => ({
			isSaving: true,
			id: prevState.id,
			value,
		}));
	};

	_handleOpenFile = (event) => {
		const key = event.target.value;
		const { files } = this.state;
		
		if (key) {
			this.setState({
				id: key,
				title: files[key].title,
				value: files[key].content,
			});

			return;
		}

		this.setState({
			isSaving: null,
			...GET_INITIAL_STATE(),
		});
	};
}

export default App;

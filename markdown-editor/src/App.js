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
		files: [],
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
				handleOnSave={ this._saveData }
				handleOnDelete={ this._removeData }
				handleOpenFile={ this._handleOpenFile }
				files={ files } />
		);
	}

	_getFilesFromStorage() {
		const filesIds = Object.keys(localStorage).filter(key => key.match(KEY_STORAGE_REGEX));

		this.setState({ files: filesIds });
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
		const { id, isSaving, value, files } = this.state;
		
		if (isSaving) {
			persistData({ key: id, value });

			const isIdSaved = this._hasIdOnState(id)

			this.setState({
				isSaving: false,
				files: isIdSaved ?
					[ ...files ] :
					[
						id,
						...files,
					]
				,
			});
		}
	}

	_hasIdOnState(id) {
		return this.state.files.find((fileId) => fileId === id);
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

	_handleOpenFile = (event) => {
		const key = event.target.value;
		
		if (key) {
			this.setState({
				id: key,
				value: loadData(key),
			});

			return;
		}

		this.setState({
			...GET_INITIAL_STATE(),
			isSaving: null,
		});
	};
}

export default App;

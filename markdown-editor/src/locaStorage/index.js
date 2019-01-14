export const loadData = (key) => {
	try {
		const serializedData = localStorage.getItem(key);

		if (!serializedData) {
			return undefined;
		}

		return JSON.parse(serializedData);
	} catch (err) {
		console.error(err);

		return undefined;
	}
};

export const persistData = ({ key, value }) => {
	try {
		const serializedData = JSON.stringify(value);

		localStorage.setItem(key, serializedData);
	} catch (err) {
		console.error(err);
	}
};

export const removeData = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (err) {
		console.error(err);
	}
};

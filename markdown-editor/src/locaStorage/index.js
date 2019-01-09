export const loadData = (key) => {
	try {
		const serializedData = localStorage.getItem(key);

		if (!serializedData) {
			return undefined;
		}

		return JSON.parse(serializedData);
	} catch (err) {
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

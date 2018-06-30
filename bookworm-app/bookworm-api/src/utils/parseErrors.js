module.exports = function parseErrors(errors) {
	const result = {};
	if (errors) {
		Object
			.entries(errors)
			.forEach((value) => {
				result[value[0]] = value[1].message;
			});
	}
	return result;
};

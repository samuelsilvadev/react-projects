const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const setRequiredRule = value => typeof value !== 'undefined' ? undefined : 'Field is required';
export const setIsEmail = value => EMAIL_REGEX.test(value) ? undefined : 'Type a valid Email';
export const setIsValidPassword = value => {
	if (value.length < 6) {
		return 'Min characters is 6';
	}

	if (value.length > 12) {
		return 'max characters is 12';
	}

	return undefined;
};
export const setIsPasswordEquals = (confirmPassword, { password }) => {
	if (confirmPassword !== password) {
		return 'The Passwords don\'t match';
	}

	return undefined;
};

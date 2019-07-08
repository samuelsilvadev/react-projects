export interface Action {
	type: string;
	payload: any;
};

export interface AUTH {
	email: string;
	password: string;
}

export interface STATE {
	auth: AUTH,
}

export const EMAIL_CHANGED = '@FORM/EMAIL_CHANGED';
export const PASSWORD_CHANGED = '@FORM/PASSWORD_CHANGED';

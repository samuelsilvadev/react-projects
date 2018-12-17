import pagination from './../pagination';

describe('Pagination utility', () => {
	it('should be a function', () => {
		expect(typeof pagination).toBe('function');
	});

	it('should return [1] when be passed pagination({ total: 1, active: 1 })', () => {
		const params = { total: 1, active: 1 };
		const result = [1];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2] when be passed pagination({ total: 2, active: 1 })', () => {
		const params = { total: 2, active: 1 };
		const result = [1, 2];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2, 3, 4, 5] when be passed pagination({ total: 5, active: 1 })', () => {
		const params = { total: 5, active: 1 };
		const result = [1, 2, 3, 4, 5];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2, 3, "...", 6] when be passed pagination({ total: 6, active: 1 })', () => {
		const params = { total: 6, active: 1 };
		const result = [1, 2, 3, '...', 6];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2, 3, "...", 6] when be passed pagination({ total: 6, active: 2 })', () => {
		const params = { total: 6, active: 2 };
		const result = [1, 2, 3, '...', 6];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2, 3, 4, 5, 6] when be passed pagination({ total: 6, active: 3 })', () => {
		const params = { total: 6, active: 3 };
		const result = [1, 2, 3, 4, 5, 6];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2, 3, 4, 5, 6] when be passed pagination({ total: 6, active: 4 })', () => {
		const params = { total: 6, active: 4 };
		const result = [1, 2, 3, 4, 5, 6];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, "...", 4, 5, 6] when be passed pagination({ total: 6, active: 5 })', () => {
		const params = { total: 6, active: 5 };
		const result = [1, '...', 4, 5, 6];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, "...", 7, 8, 9, "...", 15] when be passed pagination({ total: 15, active: 8 })', () => {
		const params = { total: 15, active: 8 };
		const result = [1, '...', 7, 8, 9, '...', 15];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1, 2, 3, "...", 15] when be passed pagination({ total: 15 })', () => {
		const params = { total: 15 };
		const result = [1, 2, 3, '...', 15];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1] when be passed pagination({})', () => {
		const params = {};
		const result = [1];

		expect(pagination(params)).toEqual(result);
	});

	it('should return [1] when be passed pagination()', () => {
		const params = undefined;
		const result = [1];

		expect(pagination(params)).toEqual(result);
	});

	it('should throw an error when be passed pagination({ total: "not a number", active: 5 })', () => {
		const params = { total: "not a number", active: 5 };
		const withError = () => pagination(params);

		expect(withError).toThrow(TypeError);
		expect(withError).toThrowError('total should be a number');
	});

	it('should throw an error when be passed pagination({ total: 10, active: "not a number" })', () => {
		const params = { total: 10, active: "not a number" };
		const withError = () => pagination(params);

		expect(withError).toThrow(TypeError);
		expect(withError).toThrowError('active should be a number');
	});
});

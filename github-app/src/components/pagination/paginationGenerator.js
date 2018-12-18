const VISIBLE_PAGES = 3;

function _generateArray(length, callback) {
	return Array.from({ length }, callback || ((_, index) => index + 1));
}

function _centerRule({ active, total }) {
	if (active - 1 <= 0) {
		return 1;
	}

	if (active === total) {
		return active - 2;
	}

	return active - 1;
}

function _removeDuplicates(array) {
	return array.filter((value, index, arr) => {
		return arr.indexOf(value) === index;
	});
}

function paginationGenerator({ total = 1, active = 1 } = {}) {
	if(typeof total !== 'number') {
		throw new TypeError('total should be a number');
	}

	if(typeof active !== 'number') {
		throw new TypeError('active should be a number');
	}

	if (total <= 5) {
		return _generateArray(total);
	}

	let pages = [
		1,
		..._generateArray(
			VISIBLE_PAGES,
			(_, index) => index + _centerRule({ total, active })
		),
		total
	];

	pages = _removeDuplicates(pages);
	
	let firstPage = pages[0];
	let secondPage = pages[1];

	if (secondPage === (firstPage + 2)) {
		pages = [firstPage, firstPage + 1, ...pages.slice(1)];
	}

	firstPage = pages[0];
	secondPage = pages[1];

	if (secondPage > (firstPage + 2)) {
		pages = [firstPage, '...', ...pages.slice(1)];
	}

	let penultimatePage = pages[pages.length - 2];
	let lastPage = pages[pages.length - 1];

	if (lastPage === (penultimatePage + 2)) {
		pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
	}

	penultimatePage = pages[pages.length - 2];
	lastPage = pages[pages.length - 1];

	if (penultimatePage < (lastPage - 2)) {
		pages = [...pages.slice(0, -1), '...', lastPage];
	}

	return pages;
}

export default paginationGenerator;

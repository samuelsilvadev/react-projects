
const VISIBLE_PAGES = 3;

function _generateArray(length, callback) {
	return Array.from({ length }, callback || ((_, index) => index + 1))
}

function _centerRule({ active }) {
	if((active - 1) <= 0) {
		return 1;
	}

	return active - 1;
}

function _removeDuplicates(array) {
	return array.filter((value, index, arr) => {
		return arr.indexOf(value) === index;
	});
}

function pagination({ total, active }) {
	if (total <= 5) {
		return _generateArray(total);
	}

	let pages = [
		1,
		..._generateArray(VISIBLE_PAGES, (_, index) => index + _centerRule({ active })),
		total,
	];

	pages = _removeDuplicates(pages);

	let firstPage = pages[0];
	let secondPage = pages[1];
	
	if(secondPage === (firstPage + 2)) {
		pages = [
			firstPage,
			firstPage + 1,
			...pages.slice(1),
		];
	}

	firstPage = pages[0];
	secondPage = pages[1];
	
	if(secondPage > (firstPage + 2)) {
		pages = [
			firstPage,
			'...',
			...pages.slice(1),
		];
	}
	
	let penultimatePage = pages[pages.length - 2];
	let lastPage = pages[pages.length - 1];
	
	if(lastPage === (penultimatePage + 2)) {
		pages = [
			...pages.slice(0, -1),
			lastPage - 1,
			lastPage
		];
	}

	penultimatePage = pages[pages.length - 2];
	lastPage = pages[pages.length - 1];

	if(penultimatePage < (lastPage - 2)) {
		pages = [
			...pages.slice(0, -1),
			'...',
			lastPage
		];
	}

	return pages;
}

export default pagination;

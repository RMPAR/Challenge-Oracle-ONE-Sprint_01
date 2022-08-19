const inputText = document.querySelector('.input-text');
const message = document.querySelector('.message');

function encript(stringEcripted) {
	let matrixCode = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];

	stringEcripted = stringEcripted.toLowerCase();

	for (let i = 0; i < matrixCode.length; i++) {
		if (stringEncripted.includes(matrixCode[i][0])) {
			stringEcripted = stringEcripted.replaceAll(
				matrixCode[i][0],
				matrixCode[i][1]
			);
		}
	}

	return stringEcripted;
}

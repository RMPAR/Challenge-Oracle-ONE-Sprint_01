const inputText = document.querySelector('.input-text');
const message = document.querySelector('.message');

function encript(stringEncrypted) {
	let matrixCode = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];

	stringEncrypted = stringEncrypted.toLowerCase();

	for (let i = 0; i < matrixCode.length; i++) {
		if (stringEncrypted.includes(matrixCode[i][0])) {
			stringDecrypted = stringDecrypted.replaceAll(
				matrixCode[i][0],
				matrixCode[i][1]
			);
		}
	}

	return stringEncrypted;
}

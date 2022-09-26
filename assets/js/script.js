const inputText = document.querySelector('.input-text');
const message = document.querySelector('.message');
const buttonCopy = document.querySelector('.copy');
buttonCopy.style.display = 'none';

function buttonEncrypt() {
	const textEncrypted = encrypt(inputText.value);
	message.value = textEncrypted;
	message.style.backgroundImage = 'none';
	inputText.value = '';
	buttonCopy.style.display = 'block';
}

function buttonDecrypt() {
	const textEncrypted = decrypt(inputText.value);
	message.value = textEncrypted;
	inputText.value = '';
}

function encrypt(stringEncrypted) {
	let matrixCode = [
		['a', 'ai'],
		['e', 'enter'],
		['i', 'imes'],
		['o', 'ober'],
		['u', 'ufat'],
	];

	stringEncrypted = stringEncrypted.toLowerCase();

	for (let i = 0; i < matrixCode.length; i++) {
		if (stringEncrypted.includes(matrixCode[i][0])) {
			stringEncrypted = stringEncrypted.replaceAll(
				matrixCode[i][0],
				matrixCode[i][1]
			);
		}
	}
	return stringEncrypted;
}

function decrypt(stringDecrypted) {
	let matrixCode = [
		['a', 'ai'],
		['e', 'enter'],
		['i', 'imes'],
		['o', 'ober'],
		['u', 'ufat'],
	];

	stringDecrypted = stringDecrypted.toLowerCase();

	for (let i = 0; i < matrixCode.length; i++) {
		if (stringDecrypted.includes(matrixCode[i][1])) {
			stringDecrypted = stringDecrypted.replaceAll(
				matrixCode[i][1],
				matrixCode[i][0]
			);
		}
	}

	return stringDecrypted;
}

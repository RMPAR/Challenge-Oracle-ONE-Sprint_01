const inputText = document.querySelector('.input-text');
const message = document.querySelector('.message');
const buttonCopy = document.querySelector('.copy');

function buttonEncrypt() {
	const textToEncrypt = encrypt(inputText.value);
	message.value = textToEncrypt;
	message.style.backgroundImage = 'none';
	inputText.value = '';
}

function encrypt(stringToEncrypt) {
	let matrixCode = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];

	stringToEncrypt = stringToEncrypt.toLowerCase();

	for (let i = 0; i < matrixCode.length; i++) {
		if (stringToEncrypt.includes(matrixCode[i][0])) {
			stringToEncrypt = stringToEncrypt.replaceAll(
				matrixCode[i][0],
				matrixCode[i][1]
			);
		}
	}
	return stringToEncrypt;
}

function buttonDecrypt() {
	const textEncrypted = decrypt(inputText.value);
	message.value = textEncrypted;
	inputText.value = '';
}

function decrypt(stringEncrypted) {
	let matrixCode = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];

	stringEncrypted = stringEncrypted.toLowerCase();

	for (let i = 0; i < matrixCode.length; i++) {
		if (stringEncrypted.includes(matrixCode[i][1])) {
			stringEncrypted = stringEncrypted.replaceAll(
				matrixCode[i][1],
				matrixCode[i][0]
			);
		}
	}

	return stringEncrypted;
}

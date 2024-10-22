console.log ("js-paliedispari")

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Prompt utente ("Scrivi una parola")
	const parola = prompt('Inserisci una parola e ti dirò se è palindroma.')
	console.log(parola)

// 2. SE parola è palindroma
//  - diciamo che la parola è palindroma
// ALTRIMENTI
//  - diciamo che non è palindroma

if (isPalindrome(parola)) {
	console.log(`La parola '${parola}' è palindroma`)
} else {
	console.log(`La parola '${parola}' non è palindroma`)
}

function isPalindrome(word) {
	word = word.toLowerCase()
	const reversedWord = stringReverse(word)

	console.log(word)
	console.log(reversedWord)

	// SE text === reversedText
	//  - return true
	// ELSE
	//  - return false
	
	if (word === reversedWord) {
		return true
	} else {
		return false
	}

	// return boolean
}

function stringReverse(text) {
	let newText = ''

	// invertire la stringa text
	for (let i = 0; i < text.length; i++) {
		const char = text.at(-i - 1)
		// console.log(i, char)
		newText += char
	}

	return newText
}

// const userWord = 'Ciao'

// function stringReverse(text) {
// 	let newText = ''
// 	// let newChars = []

// 	// invertire la stringa text
// 	for (let i = 0; i < text.length; i++) {
// 		// console.log(i)
// 		const char = text.at(-i - 1)
// 		console.log(i, char)
// 		// newChars.push(char)
// 		newText += char
// 		// console.log(newText)
// 	}

// 	// console.log(newChars, newChars.join(''))
// 	// return string
// 	// return newChars.join('')
// 	return newText

// 	// return char
// }

// const reversedText = stringReverse(myText) // string
// console.log(reversedText) // 'oaiC'
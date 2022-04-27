/* 1. Написать скриптик, который сосчитает и выведет результат 
от возведения 2 в степень 10, начиная со степени 1
*/

for (let i=1; i<11; i++) {
    console.log(Math.pow(2, i)) 
}
console.log("=======")

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const exp = function (i) {
    let result = 1
    for (let j=1; j<i+1; j++) {
        result *= 2
    }
    return result
}
console.log(exp(7))
console.log("=======")

/* 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
чтобы в первой строчке выводилось :), во второй :):) и так далее.
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

for (let i=1; i<6; i++) {
    let str = ":)"
    console.log(str.repeat(i))
}
console.log("=======")

/* 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)
*/

const printSmile = function (str, numberOfRows) {
    for (let i=1; i<=numberOfRows; i++) {
        console.log(str.repeat(i))
    }
}
printSmile("=ˆ.ˆ= ", 7)
console.log("=======")

/* 3**.  Написать функцию, которая принимает на вход слово. 
Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'
*/

// indexOf()

const getWordStructure = function (word) {
    let vowels = "aeiouy"
    let consonants = "bcdfghjklmnpqrstvwxyz" 
    let str = word.toLowerCase() 

    let countV = 0
    let countC = 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) >= 0) {
            countV += 1
        }
        if (consonants.indexOf(str[i]) >= 0) {
            countC += 1
        }
    }
    console.log("Слово " + word + " состоит из  " + countV + " гласных букв и " + countC + " согласных букв")
}

getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")
console.log("=======")

// includes() 

const getWordStructure2 = function (word) {
    let vowels = "aeiouy"
    let consonants = "bcdfghjklmnpqrstvwxyz" 
    let str = word.toLowerCase() 

    let countV = 0
    let countC = 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            countV += 1
        }
        if (consonants.includes(str[i])) {
            countC += 1
        }
    }
    console.log("Слово " + word + " состоит из " + countV + " гласных букв и " + countC + " согласных букв")
}
getWordStructure2("Case")
console.log("=======")

/* 4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/

const isPalindrom = function (word) {
    let str = word.toLowerCase() 
    let strRes = ""
    
    for (let i = str.length -1; i >= 0; i--) {
        strRes += str[i]
    }

    if (strRes == str) {
        console.log("palindrom")
    } else {
        console.log("not palindrom")
    }
}

isPalindrom("abba")
isPalindrom("Abba")
isPalindrom("АРозаУпалаНаЛапуАзора")
isPalindrom("bebebe")
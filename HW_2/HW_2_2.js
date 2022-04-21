// ****
let result = prompt('Введите ваш возраст', 'число') // Оптимизация: "= +prompt" - сразу приведет к числу

let age = result
let age_2 = 18
let age_3 = 60

    if (typeof age != "number") {
        age = Number(age)
    }
    if (age < age_2) {
        alert("You don’t have access cause your age is " + age + ". It’s less then " + age_2 + ".")
    } else if (age >= age_2 && age < age_3) {
        alert("Welcome!")
    } else if (age >= age_3) {
        alert("Keep calm and look Culture channel.")
    } else {
        alert("Technical work")
    }

alert
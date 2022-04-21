let item_1
item_1 = 5
console.log(item_1)
let item_2
item_2 = 3
console.log(item_2)
let item_3
item_3 = item_1 + item_2
console.log(item_3)
let item_4
item_4 = 'Yolochka'
console.log(item_4)
console.log(item_3 + item_4)
console.log(item_3 * item_4)
let item_5
item_5 = item_3
let item_6
let item_6_type
item_6 = 15
item_6_type = typeof (item_6)
console.log('item_6 == ' + item_6, '; item_6_type == ' + item_6_type)
let item_7 = String(item_6)
let item_7_type
item_7_type = typeof (item_7)
console.log('item_7 == ' + item_7,  '; item_7_type == ' + item_7_type)
let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2 + ".")
} else if (age_1 >= age_2 && age_1 <  age_3) {
    console.log("Welcome!")
} else if (age_1 >= age_3) {
    console.log("Keep calm and look Culture channel.")
} else {
    console.log("Technical work")
}

// *
const checkAge = function (age) {
    if (age < age_2) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_2 + ".")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
    } else if (age >= age_3) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)

// **
const checkAge_2 = function (age) {
    if (typeof age == "number") {
       
        if (age < age_2) {
            console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_2 + ".")
        } else if (age >= age_2 && age < age_3) {
            console.log("Welcome!")
        } else if (age >= age_3) {
            console.log("Keep calm and look Culture channel.")
        } else {
            console.log("Technical work")
        }
    } else { console.log ('Введено не число') }
} 
checkAge_2("17")

// ***
const checkAge_3 = function (age) {
   // age = Number(age) - можно убрать, т.к isNaN сам переводит в number

    // if (!isNaN(age)) - можно еще проще
    // if (Number(age)) - и затем еще упрощаем, чтобы не вызывать класс
    if (+(age)) { 
        
        if (age < age_2) {
            console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_2 + ".")
        } else if (age >= age_2 && age < age_3) {
            console.log("Welcome!")
        } else if (age >= age_3) {
            console.log("Keep calm and look Culture channel.")
        } else {
            console.log("Technical work")
        }
    } else { console.log ('Введено не число') }
}
checkAge_3("17")
checkAge_3('пять')

// **
const checkAge_4 = function (age) {
    if (typeof age !== "number") {
        throw ('Введено не число')
    } else if (age < age_2) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then " + age_2 + ".")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
    } else if (age >= age_3) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work")
    }
} 
checkAge_4("пять")

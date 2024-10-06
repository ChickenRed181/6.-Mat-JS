//Задание 1
let existingUserLogin = 'the_best_user'
let existingUserPassword = '12345678'

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

if (userLogin === existingUserLogin) {
    if (userPassword === existingUserPassword) {
        alert(`Добро пожаловать, ${userLogin}!`)
    } else {
        alert('Логин и (или) Пароль введены неверно!')
    }
} else {
    alert('Логин и (или) Пароль введены неверно!')
}

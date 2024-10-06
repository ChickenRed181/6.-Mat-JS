//Задание 3
const question1 = 'JavaScript появился в 1995 году?'
const answer1 = 'Верно'

const question2 = 'Спецификация JavaScript называется ECMAScript?'
const answer2 = 'Верно'

const question3 = 'JavaScript был создан за 1 месяц?'
const answer3 = 'Неверно. JavaScript был разработан за 10 дней.'

function askQuestion(question, correctAnswer) {
    const userResponse = confirm(question) 
    if (userResponse) {
        alert('Верно')
    } else {
        alert(correctAnswer)
    }
}

askQuestion(question1, answer1)
askQuestion(question2, answer2)
askQuestion(question3, answer3)


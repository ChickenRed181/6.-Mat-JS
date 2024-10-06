//Задание 2
let question1 = 'Сколько будет 2 + 2?'
let question2 = 'Сколько будет 2 * 2?'
let question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
let question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
let question5 = 'Сколько будет 2 + 2 * 2?'

let correctAnswer1 = 4
let correctAnswer2 = 4
let correctAnswer3 = 1
let correctAnswer4 = 12
let correctAnswer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

function askQuestion(question, correctAnswer) {
    let userAnswer = Number(prompt(question).trim())

    if (userAnswer === correctAnswer) {
        alert('Ответ Верный')
        correctAnswers++
    } else {
        alert('Ответ Неверный')
        incorrectAnswers++
    }
}

askQuestion(question1, correctAnswer1)
askQuestion(question2, correctAnswer2)
askQuestion(question3, correctAnswer3)
askQuestion(question4, correctAnswer4)
askQuestion(question5, correctAnswer5)

alert(`Конец теста! Правильные ответы — ${correctAnswers} Неправильные ответы — ${incorrectAnswers}.`)

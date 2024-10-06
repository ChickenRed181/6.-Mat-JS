// Задание 4

// while
let i = 0
while (i < 3) {
  let newStudent = prompt('Введите имя нового студента!')
  if (newStudent) {
    newStudent = newStudent.trim()
    alert(`Добро пожаловать, ${newStudent}!`)
  }
  i += 1
}

// do while
let k = 0
do {
  let newStudent = prompt('Введите имя нового студента!')
  if (newStudent) {
    newStudent = newStudent.trim()
    alert(`Добро пожаловать, ${newStudent}!`)
  }
  k += 1
} while (k < 3)

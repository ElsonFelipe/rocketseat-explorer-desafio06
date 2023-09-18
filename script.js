let students = [
  {name: "Joao", test1: 10, test2: 8}, 
  {name: "Maria", test1: 7, test2: 6}, 
  {name: "Pedro", test1: 8, test2: 9}
]

function average(number1, number2) {
  let total = (number1 + number2) / 2
  return total
}

for (let i = 0; i < students.length; i++) {
  let total = average(students[i].test1, students[i].test2)

  if (total >= 7) {
    alert(`A media do(a) aluno(a) ${students[i].name} e: ${total} \n Parabens ${students[i].name}! Voce foi aprovado(a) no concurso!`)
  } else {
    alert(`A media do(a) aluno(a) ${students[i].name} e: ${total} \n Nao foi dessa vez ${students[i].name}! Tente novamente!`)
  }
  
}


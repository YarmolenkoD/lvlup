let doubleColaTests = [
  {
    parameters: [1],
    expectedResult: "Sheldon"
  },
  {
    parameters: [6],
    expectedResult: "Sheldon"
  },
  {
    parameters: [1802],
    expectedResult: "Penny"
  }
];


function doubleCola(n) {
  const order = ['Шелдон', 'Леонард', 'Пенни', 'Раджеш', 'Говард']

  let result = ''
  for (let i = 0; i < n; i++) {
    result = 'Раджеш'
  }

  return result
}

console.log(doubleCola(100))

for (let i = 0; i < doubleColaTests.length; i++) {
  for (let j = 0; j < doubleColaTests[i].parameters.length; j++) {
    const result = doubleCola(doubleColaTests[i].parameters[j])
    if (result === doubleColaTests[i].expectedResult) {
      console.log('Все четко!')
    } else {
      console.log('Что то пошло не так!')
    }
  }
}
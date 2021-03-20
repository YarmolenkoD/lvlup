let ctx = document.getElementById('myChart').getContext('2d');

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'White', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 20, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(234,234,234, 0.8)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgb(241,240,238)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 10
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Custom Chart Title'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});














//
// alert('Добро пожаловать в игру')
//
// const name = prompt('Напишите имя вашего питомца')
// const type = prompt('Напишите пароду вашего питомца')
//
// const pet = {
//   eat: function () {
//     this.energy += 1
//   },
//   energy: 5,
//   mood: 5,
//   name,
//   type,
// }
//
// pet.energy += 1
//
//
//
//








//
//
//
// const result = {
//   "users": [
//     {
//       "firstName": "John",
//       "lastName": "White",
//       "age": 20,
//       "ratings": [
//         {
//           "month": "March",
//           "rating": 2
//         },
//         {
//           "month": "April",
//           "rating": 2
//         },
//         {
//           "month": "May",
//           "rating": 5
//         }
//       ]
//     },
//     {
//       "firstName": "Will",
//       "lastName": "Smith",
//       "age": 21,
//       "ratings": [
//         {
//           "month": "March",
//           "rating": 3
//         },
//         {
//           "month": "April",
//           "rating": 3
//         },
//         {
//           "month": "May",
//           "rating": 3
//         }
//       ]
//     },
//     {
//       "firstName": "Kyle",
//       "lastName": "Black",
//       "age": 19,
//       "ratings": [
//         {
//           "month": "March",
//           "rating": 5
//         },
//         {
//           "month": "April",
//           "rating": 5
//         },
//         {
//           "month": "May",
//           "rating": 5
//         }
//       ]
//     }
//   ]
// }
//
// const ctx = document.getElementById('chart').getContext('2d')
//
// const chart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: result.users[0].ratings.map(item => item.month),
//     datasets: [
//       ...result.users.map(user => {
//         return {
//           label: `${user.firstName} ${user.lastName}`,
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: user.ratings.map(item => item.rating)
//         }
//       })
//     ]
//   },
//   options: {
//
//   },
// });
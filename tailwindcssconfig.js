// tailwind.config = {
//     theme: {
//       extend: {
//         colors: {
//           clifford: '#da373d',
//         }
//       }
//     }
//   }

let num = 0;
setInterval(() => {
  num++;
  console.log(num)
  if (num === 10) {
    clearInterval(interval);
  }
}, 2000)
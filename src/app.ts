import { setInterval } from "timers"

let {va} = require('./worker')
// interface NodeModule {
//   hot: {
//     accept: (lib: string, callback: () => void) => void
//   }
// }

let m = <any>module
let count = 0
setInterval(() => {
  console.log(va, ++count)
}, 1000)

if (m.hot) {
  m.hot.accept('./worker', () => {
    va = require('./worker').va
  })
}
import { setInterval } from "timers";

import {va} from './worker'
// interface NodeModule {
//   hot: {
//     accept: (lib: string, callback: () => void) => void
//   }
// }
setInterval(() => {
  console.log(va)
}, 1000)

let m = <any>module
if (m.hot) {
  m.hot.accept('./worker', () => {
    // import {va} from './worker'
  })
}

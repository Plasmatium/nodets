import axios from 'axios'

console.log('hello world')
console.log(axios)

interface Block {
  x: number
  y: boolean
}

let va: Block = {
  x: 333,
  y: false
}
console.log(va)

export {va}
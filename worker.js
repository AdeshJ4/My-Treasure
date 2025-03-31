const { parentPort } = require('node:worker_threads')


parentPort.on("message", (num) => {
  parentPort.postMessage(num*num)
})
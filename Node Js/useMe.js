const timer1 = setTimeout(() => {
  console.log("setTimeout()");
}, 500);

const timer2 = setImmediate(() => {
  console.log("setImmediate()");
}, 500);

const timer3 = process.nextTick(() => {
  console.log("process.nextTick()");
}, 500);

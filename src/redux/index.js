const r1 = new Promise((res) => {
  res('4')
})

console.log(1)

setTimeout(() => {
  setTimeout(() => {
    console.log(2)
  }, 1)
  console.log(3)
}, 1)

setTimeout(() => {
  r1.then((_) =>
    setTimeout(() => {
      console.log(_)
    }, 0)
  )
}, 0)

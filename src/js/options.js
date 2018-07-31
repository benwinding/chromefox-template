$input = $('input#exampleStored')

core.getStorage({example: 'this is a stored variable'})
  .then((stored) => {
    $input.val(stored.example);
  })

$input.keyup((el) => {
  let inputValue = $input.val()
  console.log(`New value set: ${inputValue}`)
  core.setStorage({example: inputValue});
})
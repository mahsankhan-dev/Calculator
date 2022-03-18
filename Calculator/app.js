function getResult(f) {
  var a = document.getElementById("field")
  a.value += f
  console.log(a.value)
}

function showResult() {
  var a = document.getElementById('field')
  a.value = eval(a.value)
}

function clearItem() {
  var a = document.getElementById('field')
  a.value = ''
}
function deleteItem() {
  var a = document.getElementById('field')
  a.value = a.value.slice(0, -1)
}
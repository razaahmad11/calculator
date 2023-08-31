var inp = document.getElementById("inp")

function addValue(num) {
    if (num === 'twoZero') {
        inp.value += 0
        inp.value += 0
    } else {
        inp.value += num
    }

    console.log(num)
}
function calValue() {

    inp.value = eval(inp.value.replaceAll("x", "*"))
}
function dltValue() {
    inp.value = inp.value.slice(0, -1)
}
function clrValue() {
    inp.value = ""
}
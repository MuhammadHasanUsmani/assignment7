function getNumber(num){
    // console.log(num)
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}
function returned() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1)
}
window.onerror = function () {
    alert("Some Error Found. Please Check your Input.")
}
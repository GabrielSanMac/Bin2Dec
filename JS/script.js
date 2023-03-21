const binary = document.querySelector('.binary');
const btn_action = document.querySelector('.btn_action');
const display_number = document.querySelector('.display_number');

btn_action.addEventListener('click', () => {
    display_number.style.animation = "none"
    var binary_number = 0;
    var binary_value = binary.value;
    let pow = 1;
    for(i = binary_value.length-1; i>=0;i--){
        if(binary_value[i] > 1){
            invalidNumber()
            binary.value = ""
            return
        }
        display_number.style.background = "#006c0e"
        binary_number += binary_value[i]*pow;
        pow *= 2;
        binary.value = ""
    }
    display_number.innerHTML = binary_number
});

function invalidNumber() {
    display_number.style.animation = "balanco 1 0.3s"
    display_number.style.background = "#f00"
    display_number.innerHTML = "BINARY IS INVALID"
}
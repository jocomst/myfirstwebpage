const beefRadio = document.getElementById('beef');
const chickenRadio = document.getElementById('chicken');
const veggieRadio = document.getElementById('veggie');
console.log(beefRadio.checked);

const radioArr = [beefRadio, chickenRadio, veggieRadio];
for (radio of radioArr) {
    radio.onclick = function () {
        if (radio.checked) {
            console.log('clicked');
        }
    }
}


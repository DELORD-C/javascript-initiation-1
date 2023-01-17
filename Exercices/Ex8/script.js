let interval,
    mil = document.getElementById('mil'),
    sec = document.getElementById('sec'),
    chrono = 0;
    min = document.getElementById('min');

function chronoStart() {
    let button = document.getElementById('start');
    if (button.innerHTML == 'Start') {
        interval = setInterval(() => {
            chrono++;
            updateTime();
        }, 10);
        button.innerHTML = 'Pause';
    }
    else {
        clearInterval(interval);
        button.innerHTML = 'Start';
    }
}

function updateTime() {
    let minval = Math.floor(chrono / 100 / 60);
    min.innerHTML = format(minval);
    let secval = Math.floor(chrono / 100 - minval * 60);
    sec.innerHTML = format(secval);
    let milval = chrono - (minval * 100 * 60) - (secval * 100)
    mil.innerHTML = format(milval);
}

function format(val) {
    if (val < 10) {
        return '0' + val;
    }
        return val;
}

function chronoReset() {
    clearInterval(interval);
    mil.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    document.getElementById('start').innerHTML = 'Start';
}

// function chronoStart() {
//     let button = document.getElementById('start');
//     if (button.innerHTML == 'Start') {
//         interval = setInterval(() => {
//             update(mil, 99);
//         }, 10);
//         button.innerHTML = 'Pause';
//     }
//     else {
//         clearInterval(interval);
//         button.innerHTML = 'Start';
//     }
// }

// function update (element, max) {
//     if (parseInt(element.innerHTML) == max) {
//         element.innerHTML = '00'
//         switch (element.getAttribute('id')) {
//             case 'mil':
//                 update(sec, 59);
//                 break;
        
//             default:
//                 update(min, false);
//                 break;
//         }
//     }
//     else {
//         let newelement = parseInt(element.innerHTML) + 1
//         if (newelement < 10) {
//             newelement = '0' + newelement;
//         }
//         element.innerHTML = newelement;
//     }
// }
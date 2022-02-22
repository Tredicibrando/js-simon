console.log('ciao');


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let n1 = getRandomIntInclusive(0, 50);
    n2 = getRandomIntInclusive(0, 50);
    n3 = getRandomIntInclusive(0, 50);
    n4 = getRandomIntInclusive(0, 50);
    n5 = getRandomIntInclusive(0, 50);

const numeri = [n1, n2, n3, n4, n5];
console.log(numeri);

alert(`
         ATTENZIONE!
    memorizza questi numeri:
         ${numeri}
`);

let activeIndex = 0;
let time = 0;

const timeElement = document.getElementById('timer');
timeElement.innerHTML = time;

let clock = setInterval()


numeri.forEach(element => {
    let numeroGiocatore = parseInt(prompt(''));
    console.log(numeroGiocatore)

    if(numeroGiocatore !== element){
        console.log('mi dispiace la combinazione è errata')
    } else {
        console.log(`congratulazioni! i numeri sono ${numeroGiocatore},${element}`)
        activeIndex++;
    }
 });

 console.log(activeIndex)








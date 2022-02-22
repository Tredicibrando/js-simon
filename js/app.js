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

let timeElement = document.getElementById('timer');
timeElement.innerHTML = time;

let clock = setInterval( ( ) => {
    if( time !== 30){
        time++;
        timeElement.innerHTML = time;
    } else {
        clearInterval(clock);
        runPromt()
    }
}, 1000)


function runPromt(){
    numeri.forEach(element => {
        let numeroGiocatore = parseInt(prompt(''));
        console.log(numeroGiocatore)
    
        if(numeroGiocatore !== element && numeroGiocatore !== isNaN){
            console.log('mi dispiace la combinazione è errata')
        
        } else {
            console.log(`congratulazioni! i numeri sono ${numeroGiocatore},${element}`)
            activeIndex++;
        }
     });
     
    
     console.log(`questo è il punteggio: ${activeIndex}`)
    
}
    







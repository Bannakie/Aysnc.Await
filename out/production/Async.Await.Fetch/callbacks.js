
// HW1
// HW1 log will show up after 0.5s
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                resolve(Math.random(3));
            } else {
                reject('Error: Something went wrong');
            }
        }, 500);
    });
}

async function getNumber() {
    let result = await getRandomNumber();
    console.log(`Random number is: ${result}`);
}

getNumber();

//HW2
//HW2 log will show up after 2s
setTimeout(
    async function getCity(cityName) {

        const res = await fetch
            ('https://geocode.xyz/seattle?json=1');

        const data = await res.json();

        console.log(`Latitude is: ${data.latt}`);
        console.log(`Longitude is: ${data.longt}`);
    }, 2000
);
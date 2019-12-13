//async function a() {
   // let promise = new  Promise((resolve, reject) => {
       // setTimeout(() => resolve("done!"), 1000)
    //});

    //let result = await promise;
    //console.log(result);
//}

//a();

let kuadrat = function(nilai, ceknilai) {
    let hasil = nilai * nilai;
    let error = null;

    if (hasil === 0)
    error = 'error';
    ceknilai(error, hasil);
    
}

const promisify = require('util.promisify');
const kuadratPromise = promisify(kuadrat);

let nilai = 5;

async function kuadratAsync() {
    try {
        const hasil = await kuadratPromise(nilai);
        console.log(hasil);
    } catch (error) {
        console.error(error);
    }
    
};
var http =require('http')

const hitung = (angka1,angka2) => {
    let hasil = angka1 + angka2
    let result = `${ angka1 } + ${ angka2 } =  ${ hasil }`
    return result;
}

const cb = () => {
    return "ini callback"
}

console.log(hitung(10,20,cb))

var server = http.createServer(function (req, res) {
    var nama = "babastudio"
    res.end(hitung(5,4))
})

server.listen(8000);

console.log("server berjalan pada url http://localhost:8000/")



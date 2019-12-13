//console.log("Satu")
//setTimeout(() => {
    //console.log("Dua")
    //console.log("Tiga")}, 3000)

    var http =require('http')

    const hitung = (angka1,angka2) => {
        let hasil = angka1 * angka2
        let result = `${ angka1 } * ${ angka2 } =  ${ hasil }`
        return result;
    }
    
    const cb = () => {
        return "ini callback"
    }
    
    var server = http.createServer(function (req, res) {
        console.log(hitung(10,20,cb))
    })
    
   
    
    server.listen(4000);
    
    console.log("server berjalan pada url http://localhost:4000/");
    
    
    
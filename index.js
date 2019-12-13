var http = require('http')

let data_array = [10,20,30];

var server = http.createServer(function (req, res) {
    console.log("selamat datang di Nodejs")
})
let data_object = {
    'nama' : 'nur',
    'kursus' : 'NodeJS',
    'rating' : 5
};
 
    // console.log(data_array[0])
    // console.log(data_object.nama)

// let JSON_data = JSON.stringify(data_object)

server.listen(8001);


console.log("server berjalan pada url http://localhost:8001");
console.log(data_object);
console.log(data_array[1]);
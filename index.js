require('dotenv').config();


const mongoose = require('mongoose')
const express = require('express')

const app = express();

// (ayns() => {
//    try {
//      mongoose.connect("mongodb://localhost:27017");
//    } catch (error) {
//        console.log("mongodb error to load" + error);
//        process.exit(1);
//    }
// })();


const connect = async() => {
    try {
        mongoose.connect("mongodb://localhost:27017/test").then(() => console.log('connected'));
    } catch (error) {
        console.log(error);
    }
}


app.use('/' , (req ,res) => {
    res.write("<h1>Hello with mongodb</h1>");
    res.write("<p>lorem ipusm doller is working now</p>");
    res.write("<h1>Hello with mongodb</h1>");
    res.end();
})




connect();
app.listen(process.env.PORT , () => {
    console.log(`server is running at ${process.env.PORT}`)
})
// const express = require('express');
// const app = express();
// const fs = require('fs');
// const url = require('url');
// const http = require('http');


// http.createServer((req, res) => {
//     const path = req.url;
//     if(req.url === '/') {
//       res.writeHead(200 , {'content-type' : "text/html"});
//       const content = fs.readFileSync('./views/home.html');
//       res.write(content);
//       res.end()
//     }

//     else if(path === '/about'){
//         res.writeHead(200 , {"content-type" : "text/html"});
//         const content = fs.readFileSync('./views/services.html');
//         res.write(content);
//         console.log(res.date)
//         res.end();
//     }
//    console.log(url.parse(req.url))
// }).listen(4000 , () => {
//     console.log('server is runnug');
// })




// app.get('/' , (req , res) => {
//     const obj = url.parse(req.url);
//     res.send("Hello world");
//     console.log(obj)
// })

// app.get('/login' , (req , res) => {
//     res.send("<h2>Login</h2>");
// })


// app.listen(process.env.PORT , () => {
//     console.log('server is running');
// })


// // read write and delete file


// read file
//   let text  = ''
// fs.readFile('js.txt' , (error , data)  => {
//     if(error) console.log(error);
//     else {
//         text = data.toString();
//     }
// })


// //create file

// fs.writeFile('mongo.js' , "another text\n" , (error) =>{
//     if(error) console.log(error);
//     else console.log("saved")
// })

// // append text


// fs.appendFile('mongo.js' , "this is appending" , (err) => {
//     if(err) console.log('error');
//     else console.log('appended')
    
// })



// fs.unlink('./js.txt' , (err) => {
//     if(err) console.log(err.path);
//     else console.log('deleted');
// });



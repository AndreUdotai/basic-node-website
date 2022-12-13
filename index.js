const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
//     //__dirname : It will resolve to your project folder.
// });

// router.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname + '/about.html'));
// });

// router.get('/contact-me', function (req, res) {
//     res.sendFile(path.join(__dirname + '/contact-me.html'));
// });

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/404.html'));
});

//add the router
app.use('/', router);

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const port = process.env.PORT || 8080;

// const server = http.createServer((req, res) => {
//     // Build file path
//     let filePath = path.join(
//         __dirname,
//         req.url === '/' ? 'index.html' : req.url + '.html',
//     );

//     // Extension of the file
//     let extname = path.extname(filePath);

//     // Initial content type
//     let contentType = 'text/html';

//     // CHeck ext and set content type
//     switch(extname){
//       case '.js':
//         contentType = 'text/javascript';
//         break;
//       case '.css':
//         contentType = 'text/css';
//         break;
//       case '.json':
//         contentType = 'application.json';
//         break;
//     }

//     // Read file
//     fs.readFile(filePath, (err, content) => {
//       if(err){
//         if(err.code == 'ENOENT'){
//           // page not found
//           fs.readFile(path.join(__dirname, '404.html'), 
//           (err, content) => {
//             res.writeHead(200, {'content-Type': contentType })
//             res.end(content, 'utf-8')
//           })
//         } else {
//           // SOme server error
//           res.writeHead(500);
//           res.end(`Server Error: ${err.code}`);
//         }
//       } else {
//         // Success
//         res.writeHead(200, {'content-Type':'text/html' })
//         res.end(content, 'utf-8')
//       }
//     })
// });

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });



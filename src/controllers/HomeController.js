const fs = require('fs');
const multer = require('multer');

exports.Home=(req,res)=>{
    res.end('This is Home Page');
}

exports.About=(req,res)=>{
    res.end('This is About Page');
}

exports.Contact=(req,res)=>{
    res.end('This is Contact Page');
}

exports.FileWrite=(req,res)=>{
    fs.writeFile('demo.txt','hello world',function(error){
        if(error){
            res.end('File creation failed');
        }else{
            res.end('File has been Created');
        }
    });
}

exports.Upload=(req,res)=>{
    fs.readFile('upload.html',function(err,data){
        if(err){
            res.end('Read Failed');
        }else{
            res.end(data);
        }
    })
}

// exports.UploadFile=(req,res)=>{
//     // Configure multer for file uploads
//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Destination folder for uploaded files
//         },
//         filename: function (req, file, cb) {
//         cb(null, file.originalname + '-' + Date.now()); // Filename in the destination folder
//         }
//     });
  
//     const upload = multer({ storage: storage });
  
//   // Define a route to handle file uploads
//     app.post('/uploadFile', upload.single('file'), (req, res) => {
//         // 'file' is the name attribute of your file input field in the form
//         // req.file contains information about the uploaded file
//         if (!req.file) {
//             return res.status(400).send('No file uploaded.');
//         }
//         res.send('File uploaded successfully.');
//     });
// }


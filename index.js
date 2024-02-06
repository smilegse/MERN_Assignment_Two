const app = require('./app');

const multer = require('multer');


// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Filename in the destination folder
    }
});
  
const upload = multer({ storage: storage });
  
  // Define a route to handle file uploads
app.post('/uploadFile', upload.single('file'), (req, res) => {
    // 'file' is the name attribute of your file input field in the form
    // req.file contains information about the uploaded file
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.end('File uploaded successfully.');
});




app.listen(5500,function(){
    console.log('HTTP Server Running on Port 5500');
})

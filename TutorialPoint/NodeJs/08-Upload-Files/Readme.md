The Node.js is a good choice for handling the files-upload, Because of its non-blocking nature and ability to efficiently manage the concurrent requests.

In a Node.js application, the file uploading involves sending the files from the client (browser) to a server over HTTP. The server then processes the files, stores them in a specified location, or perform some action based on them. For this process, we will use the two main tools they are:

Express − It is a minimal web framework for handling the HTTP requests and responses.
Multer − It is a middleware that makes it easy to handle file uploads in Express.

Setting Up the Project
Initializing the Project
The first step is to set up the project folder, initialize it with the NPM and install the dependencies. Use the following command to create a new folder and navigate to it:

```
mkdir file-test
cd file-test
```

Then, Initialize the Node.js application with npm:
```
npm init -y
```
This will generate a package.json with the default values.

Now, we are going to install the necessary dependencies (express and mutter), use the following command to install them:
```
npm install express multer

Project Structure
Importing Dependencies
```
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
```
Here we are going to import the :

express for creating the server and handle the requests
multer for handling the file uploads
path to work with the file paths (getting the file extensions).
fs for interacting with the file system.

Setting Up Multer Storage Configuration
```
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, './test');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
```

In the following Multer storage we have used:

destination − It defines the folder where the uploaded files will be stored.
filename − It defines the name of the uploaded file and we are also going to use the current timestamp along with the original file extension.

Initializing Multer with Storage Configuration

Here, we are going to make the Multer to use the custom storage configuration, which we set up.

Creating the 'test' Folder
if (!fs.existsSync('./test')) {
  fs.mkdirSync('./test');
}
Before we are going to handle the uploads, we make sure that the test folder exists. If it doesnt exist, we will create it by using the fs.mkdirSync().

Handling File Uploads (POST Route)

```
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});
```

In this we are going to use the:


upload.single − It tells the multer to handle the single file upload from the field named file in the form.
req.file − If the upload gets successful, the file details will be stored in the req.file.
Serving the Upload Form (GET Route)
app.get('/', (req, res) => {
  res.send(`
    <h1>Upload a File</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  `);
});
This GET route serves as the simple HTML form where the user can select a file and upload it.

Starting the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
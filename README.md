# File Upload Application

This is a basic Express.js application that allows users to upload files and view uploaded files through a web interface.

## Features

- Upload files to a server.
- Display a list of uploaded files.
- Serve the uploaded files via URL.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or above)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
Navigate to the project directory:

```bash
cd <project_directory>
```
Install the required dependencies:
```bash
npm install
```
## Running the Application
Start the server:
```bash
node server.js
```
The server will run on http://localhost:3000.

## File Uploading
- To upload a file, navigate to http://localhost:3000 and use a form (you can create one, or use Postman or similar API tools to send a POST request with the file).
- Files will be stored in the uploads/ folder.

## Viewing Uploaded Files
- After uploading a file, the list of uploaded files will be displayed on the homepage.
- Click on the file name to download or view the file.

## Dependencies
- express - Web framework for Node.js.
- multer - Middleware for handling file uploads.
- path - Module for working with file and directory paths.
- fs - Node.js file system module for interacting with the file system.

# License
This project is licensed under the MIT License.

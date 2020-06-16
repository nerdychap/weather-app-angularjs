const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
})
//Importeren van de express module in mode_modules
const express = require('express');

//Aanmaken van een express app
const app = express(); //functie oproepen

//Endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Starten van de server en op welke poort de server moet luisteren
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/first', (req, res) => {
    res.send('שלום, זו הפונקציה של בת א!');
});


app.get('/getString', (req, res) => {
    res.send('התחביב שלי זה ללמוד תכנות'); 
});

app.listen(port, () => {
    console.log(`השרת רץ בכתובת: http://localhost:${port}`);
});
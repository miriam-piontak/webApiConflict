const express = require('express');
const app = express();
const port = 3000;

app.get('/first1', (req, res) => {
    res.send('שלום, זו הפונקציה של בת א!');
});

app.get('/second', (req, res) => {
    res.send('שלום, זו הפונקציה של בת ב!');
});


app.get('/getString', (req, res) => {
    res.send('התחביב שלי זה ללמוד צילום'); 
});

app.listen(port, () => {
    console.log(`השרת רץ בכתובת: http://localhost:${port}`);
});

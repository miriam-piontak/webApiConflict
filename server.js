const express = require('express');
const app = express();
const port = 3000;

app.get('/second', (req, res) => {
    res.send('שלום, זו הפונקציה של בת ב!');
});


app.get('/getString', (req, res) => {
    res.send('התחביב שלי זה ללמוד תסרוקות'); 
});

app.listen(port, () => {
    console.log(`השרת רץ בכתובת: http://localhost:${port}`);
});
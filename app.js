const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Docker Test Show!');
});

app.get('/greetings', (req, res) => {
    res.send('Hi there');
});

app.listen(port, () => { console.log('Firt Test of Docker App!'); });
=======
    res.send('Hello World!');
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
>>>>>>> 4c2ece4148982e5421be1130d3b0756026048344
module.exports = app
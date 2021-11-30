const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Docker Test Show!');
});

app.listen(port, () => { console.log('Firt Test of Docker App!'); });
module.exports = app
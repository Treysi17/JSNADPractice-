const express = require("express");
const app = express();

const PORT = 3000;
const HOST = '172.29.182.67 ';


//Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to express server</h1>')
});

app.get('/api/time', (req, res) => {
    res.json({time: new Date().toISOString()});
});

app.post('/api/echo', (req, res) => {
    res.json({youSent: req.body});
});

//404 handler

app.use((req, res) => {
    res.status(404).send('Not found');
});

//Start server
app.listen(PORT,() =>  {
    console.log(`Server running at http://localhost:${PORT}/`);
});
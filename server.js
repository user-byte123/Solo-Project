const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js')

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
}
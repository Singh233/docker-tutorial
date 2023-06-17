const express = require('express')
const app = express();


app.get('/', (req, res ) => 
    res.json({ message: 'Docker is super easy 🐳', env: process.env.TESTING }) 
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
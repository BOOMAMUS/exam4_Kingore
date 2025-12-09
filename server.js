const express = require('express');
const app = express();

app.use(express.json());

const server = 3000;
app.listen(server, () => {
    console.log(`Server is running on port http://localhost:${server}`);
    console.log('Hello World!');
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const pets 

const pets = [
{ id: 1, type: "dog", name: "Diesel" },
{ id: 2, type: "cat", name: "Milo" },
{ id: 3, type: "bird", name: "Sky" }
    ];
// npm init -y
const express = require('express');
const app = express();

app.use(express.json());
// const localhost = 'http://localhost:3000/pets'
// const server = 3000;
// app.listen(localhost, () => {
//     console.log(`Server is running on port http://localhost:${server}/pets`);
//     console.log('Hello World!');
// })





app.get('/pets', (req, res) => {
    // res.json(pets);
    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" }
    ];

    app.get('/', (req, res) => {
        res.send('Hello World!');
        res.json(pets);
    });
    const server = 3000;
    app.listen(server, () => {
        console.log(`Server is running on port http://localhost:${server}`);
        console.log('Hello World!');
    })
});


app.get('/pets', (req, res) => {
    // res.json(pets);
    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" }
    ];
    app.get('/', (req, res) => {
        res.send('Hello World!');
        res.json(pets);
    });
    const pet = pets.filter(p => p.id.includes(pet))
    res.json(pet);
});

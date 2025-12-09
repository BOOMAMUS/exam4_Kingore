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
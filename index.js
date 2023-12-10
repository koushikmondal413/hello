import express from "express";

const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello Word!')
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
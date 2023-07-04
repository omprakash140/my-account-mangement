const express = require('express');
const mongoose = require('mongoose');
const transcationRouter = require('./server/routes/transcation');
const path = require('path');
const PORT = 5500;

const url = "mongodb+srv://om140user:om140pass@cluster0.txmq2h3.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(express.json());

const routes = express.Router();
app.use(routes)

mongoose.connect(url)

mongoose.connection.once('open', () => {
    console.log("connection open");
})


routes.use("/transaction", transcationRouter);


routes.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

app.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, () => console.log(`listening ${PORT}`));
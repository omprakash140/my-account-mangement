const express = require('express');
const color = require('colors');
const cors = require('cors');

require("dotenv").config();
const { graphqlHTTP } = require('express-graphql')
const app = express();
const schema = require('./schema/schema')
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listining ${PORT}`))
connectDB();
app.use(cors());
app.use("/graphql", graphqlHTTP({
    schema,
    // graphiql: process.env.NODE_ENV === "development"
    graphiql: true
}))


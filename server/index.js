const express = require('express');
require("dotenv").config();
const { graphqlHTTP } = require('express-graphql')
const app = express();
const schema = require('./schema/schema')

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listining ${PORT}`))
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))
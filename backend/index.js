const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./schema');
const Resolvers = require('./resolver');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');


const dotenv = require('dotenv');
dotenv.config();


const url = 'mongodb+srv://dbAlisher:dbAlisher123@cluster0.yj41i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const connect = mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

connect.then((db) => {
    console.log('Connected correctly to server!');
}, (err) => {
    console.log(err);
});


const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
});


const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
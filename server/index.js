import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http'
import messageSchema from './schema/user.js';
import rootValue from './api/index.js';
import { ruruHTML } from 'ruru/server';

const app = express();
const port = 4000;

app.use(cors());

app.all(
    "/graphql",
    createHandler({
        schema: messageSchema,
        rootValue: rootValue
    })
)

app.get("/", (req, res) => {
    res.type("html");
    res.end(ruruHTML({
        endpoint: "/graphql"
     }))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
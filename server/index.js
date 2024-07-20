import express from 'express';
import cors from 'cors';
import messageSchema from './schema/user.js';
import { root, getBirthdayMessages } from './api/index.js';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use(cors());
app.use("/graphql", graphqlHTTP({
    schema: messageSchema,
    rootValue: root,
    graphiql: true
}));

app.get("/api/birthdayMessages", (req, res) => {
    res.json(getBirthdayMessages());
});

app.listen(4000, () => {
    console.log(`listening connection`)
})
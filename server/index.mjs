import { graphql } from 'graphql'
import { userSchema } from './schema/user.js';
import { rootValue } from './api/index.js';

graphql({
    userSchema,
    source: "{ hello }",
    rootValue
}).then(response => {
    console.log(response)
})
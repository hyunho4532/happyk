import { buildSchema } from 'graphql';

const messageSchema = buildSchema(`
  type Query {
    hello: String
  }
`)

export default messageSchema
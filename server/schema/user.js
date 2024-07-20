import { buildSchema } from 'graphql';

const messageSchema = buildSchema(`
  type Query {
    birthdayMessages: [Message]
  }
  
  type Message {
    key: Int
    title: String
    message: String
  }
`)

export default messageSchema
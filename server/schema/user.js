import {buildSchema} from 'graphql';

export var userSchema = buildSchema(`
    type Query {
      hello: String
    }
  `)
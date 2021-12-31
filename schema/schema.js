//This file's purpose instructs graphQL what type of data to have in the application

const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

//This object instructs graphql what a user object is supposed to have
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
})

//RootQuery used to allow GraphQL to ENTER into our application's data graph
//The most important part of the RootQuery is the resolve() function
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        
      },
    },
  },
})

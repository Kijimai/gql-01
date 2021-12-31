//This file's purpose instructs graphQL what type of data to have in the application

const graphql = require("graphql")
const _ = require("lodash")
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql

const users = [
  { id: "23", firstName: "Bill", age: 20 },
  { id: "47", firstName: "Samantha", age: 22 },
]

//This object instructs graphql what a user object is supposed to have
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
})

// const ShowType = newGraphQLObjectType({
//   name: "Show",
//   fields: {
//     id: { type: GraphQLInt },
//     name: { type: GraphQLString },
//     rating: { type: GraphQLInt },
//   },
// })

//RootQuery used to allow GraphQL to ENTER into our application's data graph
//The most important part of the RootQuery is the resolve() function
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id })
      },
    },
    // tvShow: {
    //   type: ShowType,
    //   args: { name: { type: GraphQLString } },
    //   resolve(parentValue, args) {
    //     return _.find(tvShows, { id: args.id })
    //   },
    // },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})

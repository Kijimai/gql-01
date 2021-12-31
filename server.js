//expressGraphQL is deprecated, use const {graphqlHTTP} = require('express-graphql')

const express = require("express")
// const expressGraphQL = require("express-graphql")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const app = express()
const PORT = process.env.PORT || 3000

// app.use('/graphql', expressGraphQL({
//   graphiql: true
// }))

const graphQLOptions = {
  schema,
  graphiql: true,
}

app.use("/graphql", graphqlHTTP(graphQLOptions))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

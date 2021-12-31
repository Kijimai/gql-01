//expressGraphQL is deprecated, use const {graphqlHTTP} = require('express-graphql')

const express = require("express")
// const expressGraphQL = require("express-graphql")
const { graphqlHTTP } = require("express-graphql")
const app = express()
const PORT = 3000 || process.env.PORT

// app.use('/graphql', expressGraphQL({
//   graphiql: true
// }))

const graphQLOptions = {
  graphiql: true,
}

app.use("/graphql", graphqlHTTP(graphQLOptions))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

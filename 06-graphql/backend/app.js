const express = require('express')
const cors = require('cors')

const graphqlHTTP = require("express-graphql");

const graphqlSchema = require("./graphqlSchema")

const app = express()
app.use(cors())

const port = 3000
app.listen(port, () => console.log(`Server listening on port ${port}!`))


app.use("/hello", function(req, res){
    res.send("hello!")
})

app.use("/graphql", function (req, res) {
    const graphqlFunc = graphqlHTTP({
        schema: graphqlSchema,
        graphiql: true,
    })

    return graphqlFunc(req, res)
        .catch(function (err) {
            console.log(err)
        })
})

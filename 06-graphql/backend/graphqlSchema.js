const graphql = require("graphql");
const getData = require("./getData")

const characterType = new graphql.GraphQLObjectType({
    name: 'Character',
    fields: {
        id: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString},
        imageUrl: {type: graphql.GraphQLString}
    }
});




const QueryRoot = new graphql.GraphQLObjectType({
    name: "Query",
    fields: () => ({
        helloDimension: {
            type: graphql.GraphQLString,
            resolve: () => "Hello Dimension!"
        },

        characters: {
            type: new graphql.GraphQLList(characterType),
            resolve: async (parent, args, context) => {

                const chars = await getData.getCharacters()

                return chars.map((char) => (
                    {
                        id: char.id,
                        name: char.name,
                        imageUrl: char.image,
                        locationUrl: char.location.url
                    }
                ))
            }
        }

    })
});

const schema = new graphql.GraphQLSchema({
    query: QueryRoot
});


module.exports = schema

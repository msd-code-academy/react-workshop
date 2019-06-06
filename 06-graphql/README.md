# GraphQL

In this session we will focus on learning GraphQL, on client and server side.

# Running it

First, clone the repository.

We have 2 parts, web and server. Open 2 terminal windows, go to `web` and `backend` folders, and each run, as usual:

`npm install`
`npm start`

You can verify it works by opening `localhost:3000/hello` and `localhost:8080` in browser.

You can see your existing GraphQL endpoint anytime at `localhost:3000/graphql`

## Introduction

GraphQL is a query language.

**How does a query looks like:**

This is example of simple query:

```
{
    characters{
        id
        name
    }
}
```

It will produce result such as:
```
{
    "characters": [
      {
        "id": "1",
        "name": "Rick Sanchez"
      },
      {
        "id": "2",
        "name": "Morty Smith"
      }
    ]
}
```

There can be nested types and arguments (we will later add array of IDs as parameter):
```
{
    characters(id:1){
        id
        name
        location{
            id
            type
            dimension
        }
    }
}
```

It will produce JSON with very similar structure:
```
{
    "characters": [
      {
        "id": "1",
        "name": "Rick Sanchez"
        "location:{
            id: "1",
            type: "Planet",
            dimension: "Dimension C-137"
        }
      }
    ]
}
```

**What are the advantages over REST API:**

Typically, in REST API, you would have endpoints such as:
- `GET /api/characters`
- `GET /api/characters/1,2`
- `GET /api/locations`
- `GET /api/character/1`

To display single web page about a character that includes location information, you might need to include location information in character endpoint or fetch from multiple endpoints. This can lead to **overfetching**.

GraphQL solves this problem by giving front-ends ability to specify exactly what data they want and in what form.

With GraphQL, it's easy to do introspection and find out exactly what can be fetched.

Version with REST APIs is not easy to solve, usually it's done such as: `GET /api/v2/characters`. This is useful when, for example, you might want to retire single field from your API, however, in REST API you send all data and don't know what data are clients actually using. With GraphQL, you have precise information about which client needs what data.

If you wanted to add for example a detail screen for a location, you might need to write new REST endpoint to server the data you need. With GraphQL, a web developer can change front-end without ever changing API.


**How is it implemented on server side**

We will be using a reference implementation of GraphQL for JavaScript ([https://github.com/graphql/graphql-js])

Basis of GraphQL endpoint is a schema.

```
const schema = new graphql.GraphQLSchema({
    query: QueryRoot
});
```

Each schema has single query root, which tells you what types can be "top level" in your queries.

```
const QueryRoot = new graphql.GraphQLObjectType({
    name: "Query",
    fields: () => ({
        constantText: {
            type: graphql.GraphQLString,
            resolve: () => "hello world"
        },
        characters:{
            ...
        },
    })
});
```

Each field is either a scalar that can be immediately resolved (string, number...) or a type.

Types are user defined:

```
const characterType = new graphql.GraphQLObjectType({
    name: 'Character',
    fields: {
        id: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString}
    }
});
```

Each field has `resolve` function that must return object of correct type.


## Exercise 1

Currently, we display only ID, name and image for each character. However, this is very basic, so we want to display additional information.

Add status, species and gender of each character to our GraphQL endpoint and display it on the web page.

You might want to look at source data format [here](https://rickandmortyapi.com/api/character/) - this is the REST API we use for loading data.

**Resolve function**

Each field has resolve function. It's either provided by default, in case the field name is same as a property of source object, or you can write your own.

It receives thee parameters - `resolve(source, args, context)`:
- source - contains object resolved one level up. It's undefined for top level objects.
- args - contains arguments passed in query
- context - used for storing data specific for whole query, such as id of calling user

## Exercise 2:

Add computed property "fullDescription" to character type that returns for example: "Rick, Human Male". In general it should be "Name, Species, Gender". Display it on the web.

**Arguments**

Each field can accept arguments with `args` property. The `args` property is object, that contains name of the arguments, as well as type of that argument.

Example of a field that accepts single Int parameter: 
```
helloDimension: {
    type: graphql.GraphQLString,
    args: {
        dimension: {type: graphql.GraphQLInt}
    },
    resolve: (parent, args) => "hello dimension " + args.dimension
}
```

Then, in the query, it can be passed like this:

```
{
  helloDimension(dimension: 2)
}
```

In case we wanted to greet multiple dimensions, it can be passed like this:

```
{
  helloDimension(dimension: [1, 2, 3])
}
```

But beware, single integer and an array of integers are different types! See for example `characters` type, which is an array of `character` type.

## Exercise 3:

Looking at the same 25 characters is so boring! Make it so that on page reload random 25 characters are shown. 

There is already random numbers generated next to `charactersQuery` in the web. `getCharacters` function accepts array of integers as well on the server.

## Exercise 4:

We want to see all the locations in the universe. Create new `locationType` and add `locations` as top level query, so we can write query such as:

`
{
  locations{
    id
    name
    type
    dimension
  }
}

You might want to look REST API to see the shape of the response: [https://rickandmortyapi.com/api/location/6]

Once you have this, add locations to the existing query on the web and display location at the top of the page.

Note: you can have 2 fields on top level. For example:
```
{
  characters{
   ...
  }
  locations{
   ...
  }
}
```

## Exercise 5:


We are interested to find out where each character is. Link `locations` type to `character`, so we will be able to query like this:

{
  characters{
   ...
   location{
    name
   }
  }
}

Display where each characters last known location.

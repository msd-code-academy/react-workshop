import axios from "axios";

export default function graphqlRequest(query){
    return axios
    .get(`http://localhost:3000/graphql/?query=${query}`)
    .then(result => result.data);
}


import React, {useEffect, useState} from "react";
import graphqlRequest from "../graphqlRequest"

import "./CharacterSheet.scss";

import Character from "./Character"

import getRandomCharacterIds from "../helpers/getRandomCharacterIds"

// for Exercise 3
const randomCharacterIds = getRandomCharacterIds(25)

const graphqlQuery = `
{
  characters{
    id
    name
    imageUrl
  }
}
`

export default function CharacterSheet() {
    const [data, setData] = useState({characters: [], locations: []});

    useEffect(() => {
        async function fetchData() {
            const result = await graphqlRequest(graphqlQuery)
            setData(result.data);
        }

        fetchData()
    }, []);

    return (
        <div>
            <ul>
                {data.characters.map(item => (
                    <li key={item.id}>
                        <Character data={item}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

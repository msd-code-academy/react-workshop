// adopted from https://github.com/afuh/rick-and-morty-api-site/blob/master/src/utils/hooks/useRandomChars.js
export default function getRandomCharacterIds(total){
    const totalNumberOfCharacters = 493
    const arr = []
    const randomNum = () => Math.floor(Math.random() * totalNumberOfCharacters + 1)

    if (total === 1) {
        return randomNum()
    }

    while (arr.length < total) {
        const num = randomNum()
        if (arr.indexOf(num) > -1) {
            continue
        }
        arr[arr.length] = num
    }

    return arr
}

const axios = require('axios')
const url = require('url')

const httpsProxyAgent = require('https-proxy-agent');
const opts = url.parse('http://webproxy.merck.com:8081');
opts.rejectUnauthorized = false;
const agent = new httpsProxyAgent(opts);

const axiosInstance = axios.create({
    // comment out if you have problems with proxy
    httpsAgent: agent
});


async function getCharacters(ids) {
    console.log("getting characters!")
    const idsString = `${ids && ids.length > 0 ? "/" + ids.join(",") : ""}`

    const rawData = await axiosInstance.get(`https://rickandmortyapi.com/api/character${idsString}`);

    // depending on whether we pass IDs array parameter, we receive result wrapped in "result" property
    return rawData.data.results ? rawData.data.results : rawData.data
}

async function getLocationFromUrl(url) {
    console.log("getting location!")

    const rawData = await axiosInstance.get(url);

    return rawData.data
}


async function getLocations() {
    console.log("getting locations!")

    const rawData = await axiosInstance.get(`https://rickandmortyapi.com/api/location`);

    return rawData.data.results
}


module.exports = {
    getCharacters,
    getLocationFromUrl,
    getLocations
}



import axios from "axios";

export const getPokemonsAPI = async (offset, limit, url) => { 
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        .then(async (res) => {
            let list = res.data.results
            for (const pokemon of list) {
                const data = await getPkemonData(pokemon.url)
                    .then(res => { return res })
                    .catch(err => { throw err })
                pokemon.data = data
            }
            return res.data
        })
        .catch(err => {throw err })
}

const getPkemonData = async (url) => {
    return await axios.get(url)
        .then(res => {
            return res.data
        })
        .catch(err => {throw err })
}
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonsAPI } from "./pokemonsAPI";

export const getPokemons = createAsyncThunk('pokemon/get-pokemons', async (params) => {
   const {offset, limit} = params
   return await getPokemonsAPI(offset, limit)
      .then(res => { return res })
      .catch(err => { throw err })//pasa a rejected
})

export const pokemonsSlice = createSlice({
   name: "pokemons",
   initialState: {
      state: "none",
      pokemonList: [],
      pagination: {
         next: null,
         previous: null,
         count: 0
      }
   },
   reducers: {
      setPokemonList: (state, action) => {
         state.pokemonList = action.payload
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getPokemons.pending, (state) => {
            state.state = "loading"
         })
         .addCase(getPokemons.fulfilled, (state, action) => {
            console.log("payload", action.payload)
            state.pokemonList = action.payload.results
            const {next, previous, count} = action.payload
            state.pagination = {next, previous, count}
            state.state = "successful"
         })
         .addCase(getPokemons.rejected, (state, action) => {
            state.pokemonList = []
            console.log("error rejected: ", action)
            state.state = "error"
         })
   }
})

export default pokemonsSlice.reducer
export const selectPokemonList = (state) => state.pokemonsSlice.pokemonList
export const selectPokemonState = (state) => state.pokemonsSlice.state
export const selectPokemonPagination = (state) => state.pokemonsSlice.pagination
export const { setPokemonList } = pokemonsSlice.actions
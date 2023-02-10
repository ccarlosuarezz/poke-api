import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "../features/pokemons/pokemonsSlice";

export const store = configureStore({
   reducer: {
      pokemonsSlice
   }
})
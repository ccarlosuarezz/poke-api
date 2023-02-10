import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { getPokemons, selectPokemonList, selectPokemonPagination, selectPokemonState } from '../../features/pokemons/pokemonsSlice';
import nextImage from "../../assets/next.svg"
import prevImage from "../../assets/prev.svg"
import Loader from "../../components/Loader/Loader";

export default function Home() {

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const params = useParams()

   const POKEMONS_LIMIT = 12;

   const pokemonList = useSelector(selectPokemonList)
   const pokemonState = useSelector(selectPokemonState)
   const pokemonPagination = useSelector(selectPokemonPagination)

   useEffect(() => {
      if (params.page) {
         if (isNaN(params.page) || params.page < 1) {
            navigate("/")
         } else {
            console.log(params.page)
            const offset = (params.page - 1) * POKEMONS_LIMIT
            dispatch(getPokemons({ offset, limit: POKEMONS_LIMIT }))
         }
      } else {
         dispatch(getPokemons({ offset: 0, limit: POKEMONS_LIMIT }))
      }
   }, [dispatch, params.page, navigate])


   const previousPage = () => {
      const param = params.page === "2" ? "" : parseInt(params.page) - 1
      if (pokemonPagination.previous) navigate("/" + param)
   }

   const nextPage = () => {
      const param = params.page ? parseInt(params.page) + 1 : 2
      if (pokemonPagination.next) navigate("/" + param)
   }

   return (
      <div className="w-4/5 pt-4 flex flex-col items-center gap-4">
         <Loader state={pokemonState === "none" || pokemonState === "loading"}/>
         <div className="flex flex-wrap justify-center gap-4">
            {pokemonList.length > 0 && pokemonState === "successful" && pokemonList.map((pokemon, index) => (
               pokemon.data &&
               <PokemonCard key={index} pokemon={pokemon} type={pokemon.data.types[0].type.name} />
            ))}
         </div>
         <div className="flex gap-x-6">
            {pokemonPagination.previous && pokemonState !== "loading" &&
               <input
                  className="bg-[#FECA1B] rounded-full border-4 border-[#3761A8]"
                  type="image"
                  src={prevImage}
                  width={50}
                  alt="prevArrow"
                  onClick={() => previousPage()}
               />
            }
            {pokemonPagination.next && pokemonState !== "loading" &&
               <input
                  className="bg-[#FECA1B] rounded-full border-4 border-[#3761A8]"
                  type="image"
                  src={nextImage}
                  width={50}
                  alt="nextArrow"
                  onClick={() => nextPage()}
               />
            }
         </div>
         {pokemonState === "error" &&
            <div>¡Ups!... error al cargar</div>
         }
      </div>
   )
}
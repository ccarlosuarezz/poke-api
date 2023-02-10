import React from 'react'
import { capitalizeFirstLetter } from '../../utils/commons'
import PokeballImage from '../../assets/pokeball.svg'
import PokeballBackgroundImage from '../../assets/pokeball-background.svg'
import { getPokemonColor } from '../../helpers/pokemonColors'

export default function PokemonCard(props) {

    const image = props.pokemon.data.sprites.other.dream_world.front_default ? props.pokemon.data.sprites.other.dream_world.front_default : PokeballImage

    const statNameRename = (statName) => {
        switch (statName) {
            case "special-attack":
                return "sp-Attk"
            case "special-defense":
                return "sp-Def"
            default:
                return statName;
        }
    }

    const colorClassByPercentage = (percetage) => {
        if (percetage >= 0 && percetage < 25) return "bg-red-400"
        if (percetage >= 25 && percetage < 50) return "bg-orange-400"
        if (percetage >= 50 && percetage < 75) return "bg-yellow-400"
        if (percetage >= 75 && percetage <= 100) return "bg-green-400"
        if (percetage > 100) return "bg-green-400"
    }

    return (
        <div className={`w-64 ${getPokemonColor(props.type)} relative rounded-2xl flex flex-col items-center shadow-gray-400 shadow-md`}>
            <div className={`w-full relative rounded-xl ${getPokemonColor(props.type)} flex flex-col items-center px-4 pt-1 pb-[115px] z-0`}>
                <img src={PokeballBackgroundImage} className="opacity-20 absolute right-0 bottom-0 -z-[1]" width={130} alt="pokeball-background"/>
                <div className="w-full flex justify-between items-center">
                    <p className="text-lg text-white font-bold">{capitalizeFirstLetter(props.pokemon.name)}</p>
                    <p className="text-sm text-white font-bold">#{props.pokemon.data.id}</p>
                </div>
                <div className='w-full flex gap-x-2'>
                    {props.pokemon.data.types.map((type, index) => (
                        <div key={index} className='bg-white bg-opacity-30 rounded-full text-white px-3'>
                            {type.type.name}
                        </div>
                    ))}
                </div>
            </div>
            <img src={image} className="w-[120px] h-[120px] absolute mt-[70px]" alt="pokephoto" />
            <div className="w-full rounded-xl bg-white px-4 pt-8 pb-4 flex flex-col items-center">
                <p className='font-bold'>Stats</p>
                <div className='w-full'>
                    {props.pokemon.data.stats.map((stat, index) => (
                        <div key={index} className="w-full text-sm font-light grid grid-cols-12 gap-2">
                            <p className='col-span-4'>{capitalizeFirstLetter(statNameRename(stat.stat.name))}</p>
                            <p className='col-span-2'>{stat.base_stat}</p>
                            <div className={`${colorClassByPercentage(stat.base_stat)} rounded-full my-[7px] col-span-6`} style={{ width: `${stat.base_stat}px`, maxWidth: "100px" }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

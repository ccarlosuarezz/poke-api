import PokeballImage from '../../assets/pokeball.svg'
import './Loader.css'

export default function Loader({ state }) {
    return (
        <>
            {state &&
                <div className='overlay-loader'>
                    <img src={PokeballImage} className="animate-spin" alt="pokeLoader" width={100} height={100}/>
                </div>
            }
        </>
    )
}
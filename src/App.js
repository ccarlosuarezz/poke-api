import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import PokeapiLogo from './assets/pokeapi_logo.png'

function App() {
   return (
      <div className=" h-full flex flex-col items-center p-4">
         <img src={PokeapiLogo} width={150} alt=""/>
         <BrowserRouter>
            <Routes>
               <Route path='/:page?' element={<Home/>}/>
               <Route/>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
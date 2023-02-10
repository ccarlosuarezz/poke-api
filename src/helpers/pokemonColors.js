exports.getPokemonColor = (type) => {
   const pokemonColors = [
      {
         type: "grass",
         color: "bg-[#50D890]"
      },
      {
         type: "fire",
         color: "bg-[#FF6464]"
      },
      {
         type: "water",
         color: "bg-[#5BC0F8]"
      },
      {
         type: "bug",
         color: "bg-[#C147E9]"
      },
      {
         type: "normal",
         color: "bg-[#CFB997]"
      },
      {
         type: "poison",
         color: "bg-[#810CA8]"
      },
      {
         type: "electric",
         color: "bg-[#FED049]"
      },
      {
         type: "ground",
         color: "bg-[#815B5B]"
      },
      {
         type: "fairy",
         color: "bg-[#AEE2FF]"
      },
      {
         type: "fighting",
         color: "bg-[#FF7B54]"
      },
      {
         type: "psychic",
         color: "bg-[#B9005B]"
      },
      {
         type: "rock",
         color: "bg-[#7F8487]"
      },
      {
         type: "ghost",
         color: "bg-[#3F0071]"
      },
      {
         type: "ice",
         color: "bg-[#89CFFD]"
      },
      {
         type: "dark",
         color: "bg-[#3C4245]"
      },
      {
         type: "dragon",
         color: "bg-[#C72C41]"
      },
      {
         type: "steel",
         color: "bg-[#CFD2CF]"
      },
      {
         type: "flying",
         color: "bg-[#1F8A70]"
      }
   ]
   return pokemonColors.find(c => c.type === type).color
}
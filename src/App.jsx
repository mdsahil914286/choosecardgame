

// import {  useState, useCallback } from "react";
// import CardItem from "./components/CardItem"

// const App =() => {
//   const [info, setInfo] = useState( {
//     moves: 0,
//     found: {},
//        pair: [],      
//   });
//  let data = [];
//  for(let i=0;i<20;i++){
//     data.push( {id:i} );
//  } 



// for(let i=19;i>=0;i--){

// const j = Math.floor(Math.random() * (i + 1));

// let temp = data[i];
// temp = data[i];

// // swap the  ith indexelements

// data[i] = data[j];

// // swap the jth index elements
// data[j] = temp;
// } 

// // const handeMoveCalculation = useCallback((id) => {
// //   let moves = info.moves + 1;
// //   // console.log("moves", moves);

// //   setInfo((prev) => ({...prev, moves}));
// // },[info?.moves]);
//   const handeMoveCalculation = useCallback((id) => {
//    setInfo((prev) => ({
//      ...prev,
//      moves: prev.moves + 1,
//    }));
//  }, []);

//   return (
//   <>

//   <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
//     {/* headingsection */}
//     <div className="text-center mb-6 flex flex-col items-center">
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800  mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//         React Memory Quiz
//       </h1>
//       <div className="flex gap-4 justify-center items-center text-lg font-semibold text-gray-700">
//         <div className="bg-white px-4 py-2 rounded-full shadow-md">Moves :<span className="text-blue-600 font-bold"> {info?.moves}</span></div>
//         <div className="bg-white px-4 py-2 rounded-full shadow-md">Founds :<span className="text-green-600 font-bold"> {info?.found}</span> /20</div>
//       </div>

//     </div>
//     {/* card section */}
//     <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6 border border-gray-200">
//       <div className="flex flex-wrap gap-4  justify-center max-w-2xl">
//         {data?.map((ele,index)=>
//         <CardItem key={index}  index={index} cardData={ele} 
//         handeMoveCalculation={handeMoveCalculation}
//         />

//         )}
//         </div>
//     </div>

//     <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:to-pink-700 transform hover:scale-105 duration-200 shadow-lg">
//       Restart Game
//     </div>
   
//   </div>

//   </>
//   )
// }

// export default App



// cart gpt code


// import { useState, useCallback, useEffect } from "react";
// import CardItem from "./components/CardItem";

// const App = () => {
//   const [info, setInfo] = useState({
//     moves: 0,
//     found: {},
//     pair: [],
//     data: [],
//     gameEnd: false,
//   });

//   useEffect(() => {
//      let data = [];

//   for (let i = 0; i < 20; i++) {
//     data?.push({ id : i });
//   }

//   // Shuffle (Fisher-Yates)
//   for (let i = 19; i >= 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));

//     let temp = data[i];
//     data[i] = data[j];
//     data[j] = temp;
//   }
//   setInfo((prev) => ({ ...prev, data }));
//   }, []);

 



//   const handeMoveCalculation = useCallback((id) => {
//     let moves = info.moves + 1;
//     let pair = [...info.pair];
//     let found = { ...info.found};
//     if (info?.pair?.length) {
//       // we need to check logic for pair
//       if(pair[0] % 10 === id % 10) {
//         found[id] = true;
//         found[pair[0]] = true;

//         if(Object.keys(found)?.length === info?.data?.length) {
//           setInfo((prev) => ({ ...prev, gameEnd: true }));
//         }
        
//       }
//         pair = [];
      
//     } else {

//       pair.push(id);
//     }
    
    
//     setInfo((prev) => ({ ...prev, moves,   found: Object.keys(found).length, pair }));
    
//    }, [info?.moves, info?.found, info?.pair]);   

//  console.log( info?.found);
//   return (
//     <>
//       <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
        
//         {/* Heading */}
//         <div className="text-center mb-6 flex flex-col items-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             React Memory Quiz
//           </h1>

//           <div className="flex gap-4 justify-center items-center text-lg font-semibold text-gray-700">
//             <div className="bg-white px-4 py-2 rounded-full shadow-md">
//               Moves :
//               <span className="text-blue-600 font-bold">
//                 {info?.moves}
//               </span>{""}
//             </div>

//             <div className="bg-white px-4 py-2 rounded-full shadow-md">
//               Found : {""}
//               <span className="text-green-600 font-bold">
//                 {Object.keys(info?.found)?.length}
//               </span> /20
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6 border border-gray-200">
//           <div className="flex flex-wrap gap-4 justify-center max-w-2xl">
//             {info?.data.map((ele, index) => (
//               <CardItem
//                 key={index}
//                 index={index}
//                 cardData={ele}
//                 handeMoveCalculation={handeMoveCalculation}
//                 isGlobalFlipped={info?.found?.[ele.id] || false}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Restart Button */}
//         <button
         
//           className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:to-pink-700 transform hover:scale-105 duration-200 shadow-lg"
//         >
//           Restart Game
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;





// chart gpt code 3

import { useState, useCallback, useEffect } from "react";
import CardItem from "./components/CardItem";

const App = () => {
  const [info, setInfo] = useState({
    moves: 0,
    found: {},
    pair: [],
    data: [],
    gameEnd: false,
  });

  // Initialize & Shuffle
  useEffect(() => {
    let data = [];

    for (let i = 0; i < 20; i++) {
      data.push({ id: i });
    }

    // Shuffle (Fisher-Yates)
    for (let i = data.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }

    setInfo((prev) => ({ ...prev, data }));
  }, []);

  // Handle Card Click
  const handeMoveCalculation = useCallback(
    (id) => {
      let moves = info.moves + 1;
      let pair = [...info.pair];
      let found = { ...info.found };

      // If one card already selected
      if (pair.length === 1) {
        pair.push(id);

        // Check match
        if (pair[0] % 10 === id % 10) {
          found[pair[0]] = true;
          found[id] = true;
        }

        // Reset pair after checking
        setTimeout(() => {
          setInfo((prev) => ({
            ...prev,
            pair: [],
          }));
        }, 1000);
      } else {
        pair = [id];
      }

      // Check game end
      const isGameEnd =
        Object.keys(found).length === info.data.length;

      setInfo((prev) => ({
        ...prev,
        moves,
        found,
        pair,
        gameEnd: isGameEnd,
      }));
    },
    [info]
  );

  // Restart Game
  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 cursor-pointer">
      
      {/* Heading */}
      <div className="text-center mb-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800  mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
          React Memory Quiz
        </h1>

        <div className="flex gap-4 justify-center items-center text-lg font-semibold text-gray-700">
          <div className="bg-white px-4 py-2 rounded-full shadow-md">Moves: <span className="text-blue-600 font-bold">{info.moves}</span></div>
          <div className="bg-white px-4 py-2 rounded-full shadow-md">
            Found: <span className="text-green-600 font-bold">{Object.keys(info.found).length}</span> / 20
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-white rounded-2xl  my-8 grid xs:grid-cols-4 3xl:grid-cols-6 border-gray-200">
      <div className="flex flex-wrap gap-4 justify-center max-w-2xl">
          {info.data.map((ele, index) => (
          <CardItem
            key={index}
            index={index}
            cardData={ele}
            handeMoveCalculation={handeMoveCalculation}
            isGlobalFlipped={info.found[ele.id] || false}
          />
          ))}
         </div>
      </div>

      {/* Restart */}
      <button
        onClick={restartGame}
        className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:to-pink-700 transform hover:scale-105 duration-200 shadow-lg"
      >
        Restart Game
      </button>



      {/* Game End Popup */}
      {info.gameEnd && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg mb-6">You've completed the game in {info.moves} moves!</p>
            <button
              onClick={restartGame}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:to-green-700 transform hover:scale-105 duration-200 shadow-lg"
            >
              Play Again
            </button>
          </div>
        </div>
      )};
    
    
    

   </div>
  );
};

export default App;
// shadow-2xl p-6 mb-4 border
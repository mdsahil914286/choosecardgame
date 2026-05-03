
import React, { useCallback } from 'react'
// import {  useCallback } from "react";
import images7 from '../assets/images/images7.jpg'
import images8 from '../assets/images/images8.jpg'
import images9 from '../assets/images/images9.jpg'
import images1 from '../assets/images/images1.jpg'  
import images2 from '../assets/images/images2.jpg'
import images3 from '../assets/images/images3.jpg'
import images4 from '../assets/images/images4.jpg'
import images5 from '../assets/images/images5.jpg'
import images6 from '../assets/images/images6.jpg'
import images10 from '../assets/images/images10.jpg'




const CardItem = ({cardData,handeMoveCalculation, isGlobalFlipped}) => {
const [isFlipped, setIsFlipped] = React.useState(false)

const handleClick =  useCallback(() => { 
if (isFlipped) return;
    setIsFlipped(true);

    handeMoveCalculation(cardData.id);

    setTimeout(() => {
        setIsFlipped(false);
    }, 1000);
},[isFlipped, cardData, handeMoveCalculation]);

    const renderImage = useCallback((id) => {
        switch (id % 10) {
          case 0:
            return images1;
            case 1:
             return images2;
                case 2:
                    return images3;
                    case 3:
                        return images4;
                        case 4:
                            return images5;
                            case 5:
                                return images6;

            case 6:
                       return images7;
            case 7:
                return images8;
            case 8:
                return images9;
            case 9:
                return images10;
            default:
                return images1;
        }

            

            
    }, []);
  


    return (
        <div
        onClick={handleClick}
         className='transition-all duration-500 relative rounded-xl card-item float-left m-2 cursor-pointer w-20 h-20 md:w-32 md:h-32 hover:scale-105 shadow-lg 
          '
          style={{opacity: isGlobalFlipped ? 0 : 1, 
            pointerEvents: isGlobalFlipped ? "none" : "auto"
            }}
      >
        
    
          
        
         



        {  /* image section */}
            <div className=''>
             <img 
             src={renderImage(cardData.id)}
              alt="card" 
              className='w-full h-full object-cover rounded-xl' />

              </div>



            <div style={{display:isFlipped?"none":"flex"}}
             className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-600 rounded-xl flex items-center justify-center '>
            <div className='text-xl md:text-2xl font-bold text-white'>?</div>
        </div> 
          
        </div>
        
   
  )
}

export default CardItem





// chat gpt 

// import React, { useCallback, useState } from 'react';

// import images1 from '../assets/images/images1.jpg';
// import images2 from '../assets/images/images2.jpg';
// import images3 from '../assets/images/images3.jpg';
// import images4 from '../assets/images/images4.jpg';
// import images5 from '../assets/images/images5.jpg';
// import images6 from '../assets/images/images6.jpg';
// import images7 from '../assets/images/images7.jpg';
// import images8 from '../assets/images/images8.jpg';
// import images9 from '../assets/images/images9.jpg';
// import images10 from '../assets/images/images10.jpg';

// const images = [
//   images1, images2, images3, images4, images5,
//   images6, images7, images8, images9, images10
// ];

// const CardItem = ({ cardData, handleMoveCalculation, isGlobalFlipped }) => {

//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = useCallback(() => {
//     if (isFlipped) return;

//     setIsFlipped(true);
//     handleMoveCalculation(cardData.id);

//   }, [isFlipped, cardData.id, handleMoveCalculation]);

//   const renderImage = useCallback((id) => {
//     return images[id % 10];
//   }, []);

//   return (
//     <div
//       onClick={handleClick}
//       className='transition-all duration-500 relative rounded-xl card-item float-left m-2 cursor-pointer w-20 h-20 md:w-32 md:h-32 hover:scale-105 shadow-lg'
//       style={{ pointerEvents: isGlobalFlipped ? "none" : "auto" }}
//     >
//       <img
//         src={renderImage(cardData.id)}
//         alt="card"
//         className='w-full h-full object-cover rounded-xl'
//       />

//       <div
//         style={{ display: isFlipped ? "none" : "flex" }}
//         className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-600 rounded-xl flex items-center justify-center'
//       >
//         <div className='text-xl md:text-2xl font-bold text-white'>?</div>
//       </div>
//     </div>
//   );
// };

// export default CardItem;

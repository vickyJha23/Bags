import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";


const Star = ({filled}) => {
  // take filled as a prop and render a span element with a filled star if the filled prop is true and an empty star if the filled prop is false    
  return  <FontAwesomeIcon className='text-[10px]' icon={filled ? faStar : regularStar} 
   color={filled ? "#F46720" : "gray"}
  />
}

export default Star

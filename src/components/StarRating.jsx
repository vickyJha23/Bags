import React from 'react'

// component import
import Star from './Star';


const StarRating = ({rating, totalStars = 5}) => {

    // take the rating and totalStars and also set the default value of totalStars to 5
    // then  creates an array of length equal to totalStars and maps over it to render a Star component for each element in the array
  return (
    <div>
         {Array.from({length: totalStars}, (_, index)=> (
            <Star key={index} filled = {index < rating} />
         ))}
    </div>
  )
}

export default StarRating

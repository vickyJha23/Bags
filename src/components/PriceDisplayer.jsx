import React from 'react'

const PriceDisplayer = ({
    currentPrice, originalPrice
}) => {

    if(!currentPrice || !originalPrice){
        return null
    }

    return (
        <div className='flex space-x-2'>
            <p>
                Rs. 1600
            </p>
            <p className='text-tertiaryColor'>
                <small className='line-through'>
                    Rs. 1800
                </small>
            </p>
        </div>
    )
}

export default PriceDisplayer

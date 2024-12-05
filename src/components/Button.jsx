import React from 'react'

const Button = ({content = "show product",}) => {
  return (
    <button className='bg-primaryColor capitalize w-32 px-3 py-2 text-white rounded-[25px]'>
    {content}
</button> 
  )
}

export default Button

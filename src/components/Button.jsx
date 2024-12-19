import React from 'react'

const Button = ({content = "show product", width="32"}) => {
  return (
    <button className='bg-primaryColor capitalize w-32 border border-transparent px-3 py-2 text-white rounded-[25px] transition-all duration-200 ease-linear hover:bg-transparent hover:border hover:border-primaryColor hover:shadow hover:shadow-primaryColor hover:text-primaryColor'>
     <span>
          {content}
     </span>
</button> 
  )
}

export default Button

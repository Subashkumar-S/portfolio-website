import React from 'react'
import "../styles.css"

const Card = (props) => {
  return (
    <div className='card py-2 w-32 md:py-4 flex flex-col font-montserrat  items-center text-white border-[1px] border-solid border-pink rounded-md hover:bg-pink shadow-md shadow-pink '>
        {props.children}
    </div>
  )
}

export default Card
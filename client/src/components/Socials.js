import React from 'react'


const Socials = (props) => {
  return (
    <div className='w-8 h-8 flex items-center justify-center text-active-black bg-primary-white bg-opacity-80 rounded-full shadow-md hover:scale-125  hover:shadow-active-white hover:bg-active-white hover:bg-opacity-100'>
        {props.children}
    </div>
  )
}

export default Socials
import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='bg-[#5f2ded] text-white py-2 px-6 rounded md:ml-8 hover:border-solid hover:border-[#00000] hover:bg-[#fbfbfb] hover:text-[#5f2ded]  duration-500'>
        {props.children}
    </button>
    </>
  )
}

export default Button
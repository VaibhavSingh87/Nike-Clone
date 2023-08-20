import React from 'react'

const Button = (props) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      props.backgroundColor? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`:"bg-coral-red text-white border-coral-red"
    } rounded-full w-full
    `}>
        {props.label}
        
         {props.iconURL && <img src={props.iconURL} alt='arrowRight' className='ml-2 rounded-full w-5 h-5'/>}
        
    </button>
  )
}

export default Button
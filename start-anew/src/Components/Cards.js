import React from 'react'

function Cards({img, rating, location, supply, title, price}) {
   
   let Supply = supply.toUpperCase()
  return (
    <div className='mt-5 pl-5 text-xs relative'>
        <img className='w-40 h-52' src={img} alt='swimmer'/>
        <span className='bg-white text-black absolute top-2 left-7 rounded-sm p-1'>{Supply}</span>
       <div className=' mt-2 gap-x-1 flex flex-row align-middle'>
       <img className=' w-3 h-3'  src='./star 1.svg' alt='star'/>
         <span>{rating}</span>
         <span className='opacity-70'>(6)</span>
         <span className='opacity-70' >.{location}</span>
       </div>
        <h6 className='w-40'> {title}</h6>
        <p><b>from {price}</b>/person</p>
       
    </div>
  )
}

export default Cards
import React from 'react'

// just a wrapper component of whatever is passed as a prop through it 
const Card = ({ children, bg='bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card
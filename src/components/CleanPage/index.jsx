import React from 'react'

function CleanPage({ children }) {
  return (
    <div className='w-screen h-screen bg-gray-700 text-white font-poppins'>
      {children}
    </div>
  )
}

export default CleanPage
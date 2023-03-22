import React from 'react'

function CleanPage({ children }) {
  return (
    <div className='w-screen h-screen bg-gray-700'>
      {children}
    </div>
  )
}

export default CleanPage
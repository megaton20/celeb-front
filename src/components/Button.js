// import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Button({type, loading, onClick, children, className, disabled= false}) {
  return (
    <button onClick={onClick}
    className={` flex items-center justify-center px-4 py-2 rounded-md transition 
    ${loading ? "bg-gray-500 cursor-not-allowed" : type }
    text-gray-900  ${type}`}
      disabled={loading || disabled}
    >
        {loading ? (
            <div className='flex items-center space-x-2'>
                <FaSpinner className='animate-spin text-lg text-white'/>
                <span>Wait...</span>
            </div>
        ):(
            children
        )}
    </button>
  )
}

export default Button
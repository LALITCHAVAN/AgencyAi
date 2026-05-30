import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col items-center text-center'>

      <h2
        className='text-4xl sm:text-5xl lg:text-6xl
        font-bold tracking-tight
        text-gray-900 dark:text-white'
      >
        {title}
      </h2>

      <p
        className='max-w-2xl mt-5 text-base sm:text-lg
        leading-7 text-gray-600 dark:text-gray-300'
      >
        {desc}
      </p>

    </div>
  )
}

export default Title
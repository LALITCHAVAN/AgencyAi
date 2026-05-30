import React from 'react'
import assets from '../assets/assets'

const ThemeToglebtm = ({ theme, setTheme }) => {

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (

    <button
      onClick={toggleTheme}
      className='p-2 rounded-full
      bg-gray-200 dark:bg-gray-800
      hover:scale-110
      transition-all duration-300'
    >

      <img
        src={
          theme === 'light'
            ? assets.moon_icon
            : assets.sun_icon
        }
        alt=""
        className='w-5'
      />

    </button>

  )
}

export default ThemeToglebtm
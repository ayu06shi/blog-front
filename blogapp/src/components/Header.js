import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='border w-full drop-shadow-md text-center py-2 inset-x-0 fixed top-0 bg-white'>
      <Link to={'/'}>
      <h1 className='font-bold text-xl uppercase'>Blogs</h1>
      </Link>
       
    </div>
  )
}

export default Header 
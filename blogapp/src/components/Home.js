import React from 'react'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';


const Home = () => {
  return (
    <div className='mx-auto'>
        <Header/>
        <div className='py-24 mx-auto max-w-[720px] px-[25px]'>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home
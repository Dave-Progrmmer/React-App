import React from 'react'
import Cards from '../components/Cards'
import Progress from '../components/Progress'
const Home = () => {
  return (
    <>
    <div className='min-h-screen w-full text-center px-4 sm:px-6 lg:px-8 pt-40 pb-20'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold'>
          Welcome back <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>David</span>
        </h1>

        <div className='max-w-7xl mx-auto'>
          <Cards />
          <Progress />
        </div>
    </div>
    
    </>
  )
}

export default Home
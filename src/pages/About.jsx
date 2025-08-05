import React from 'react'
import profile from "../assets/profile.jpg"
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] pt-40 pb-20">
        <div className="rounded-full overflow-hidden w-40 h-40 flex items-center justify-center border-4 border-white/20 shadow-lg">
            <img src={profile} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className='mt-3.5'>
            <h1 className='text-2xl'>I am a Software developer</h1>
        </div>
    </div>
  )
}

export default About
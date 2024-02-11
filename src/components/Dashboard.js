import React from 'react'
import { useNavigate } from 'react-router'

const Dashboard = ({setUser,isUser}) => {
  const naviagte=useNavigate();
  return (
    <div>
      <div className='flex flex-row text-lg shadow-lg py-2 justify-between'>
        <p className='text-3xl text-blue-500 font-semibold mx-10 cursor-pointer'>AnchorHub</p>
        <p className='text-2xl hover:scale-95 transition-all duration-200 cursor-pointer' onClick={()=>(naviagte("/jobs"))}>Jobs</p>
        <div className='flex flex-row items-center'>
          <p className='text-2xl hover:scale-95 transition-all duration-200 cursor-pointer' onClick={()=>(naviagte("/profile"))}>Profile</p>
          <button className='bg-blue-600 mx-5 text-white rounded py-1 px-4 hover:bg-blue-700'
          onClick={()=>(setUser(!isUser))}>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
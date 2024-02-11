import React from 'react'
import toast from 'react-hot-toast'

const Card = ({data}) => {
  return (
    <div className='shadow-md w-fit'>
    <p>Postion : {data.role_name}</p>
    <p>Company : {data.company_name}</p>
    <p>Expected Salary : {data.ctc_stipend}</p>
    <p>Expeience : {data.experience_required}</p>
    <button onClick={()=>(toast.success("Successfully Applied..."))}
     className='bg-blue-500 text-white py-1 px-2 rounded'>Apply</button>
    </div>
  )
}

export default Card
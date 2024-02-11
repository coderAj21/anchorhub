import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = ({isLogin,setUser,setLogin}) => {
    const url=process.env.REACT_APP_BACKEND_URL;


    const [otp,setOtp]=useState("");
    const [email,setEmail]=useState("");


    function changeHanlder(event){
        setEmail(event.target.value);
        console.log(email);
      }
      function changeOtp(event){
        setOtp(event.target.value);
        console.log(otp);
      }
      async function getOtp(){
        await axios.post(url+"/sendOtp",{email,isUser:true});
      }

      const sumbitHandler=async (event)=>{
        try{
          event.preventDefault();
          const data={
          email:email,
          otp:otp,
        }
        const response=await axios.post(url+"/login",data);
        console.log(response);
        toast.success(response.data.message);
        setUser(true);
        }catch(error){
          toast.error("Error");
        }

    }
    return (
        <div className='w-1/3 mx-auto my-2'>
            <form className='w-full flex flex-col gap-2 my-10' onSubmit={sumbitHandler}>
                <h1 className='text-3xl font-semibold text-blue-500' >Log In</h1>
                <label className='text-xl' htmlFor='name'>Email :</label>
                    <input
                    required
                    className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
                    id='email'
                    type='email' 
                    name='email'
                    onChange={changeHanlder}
                    ></input>
                <button
                className='bg-blue-500 text-white font-semibold p-2 text-xl rounded my-5 hover:bg-blue-400 transition duration-200 ease-in' 
                type='submit'
                onClick={getOtp}>Click to get OTP</button>
                <label className='text-xl' htmlFor='name'>OTP :</label>
                    <input
                    required
                    className='p-1 px-2 text-lg font-semibold border-2 border-blue-500 rounded' 
                    id='otp'
                    type='text' 
                    name='otp'
                    onChange={changeOtp}
                    ></input>
                <button
                className='bg-blue-500 text-white font-semibold p-2 text-xl rounded my-5 hover:bg-blue-400 transition duration-200 ease-in' 
                type='submit'
                >Sign in</button>
                {
                  isLogin && <p className='text-lg font-semibold' >Not Registered?
                   <span className='hover:underline cursor-pointer transition duration-200 ease-in' onClick={()=>(setLogin(!isLogin))}> Create Account</span>
                   </p>
                }
            </form>
        </div>
      )
}

export default Login;
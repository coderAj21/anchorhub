import React from 'react';
import data from "./data";
import { useState,useEffect } from 'react';
import Card from './Card';

const Jobs = () => {
  const[jobs,setJobs]=useState([]);
    useEffect(()=>{
        setJobs(data);
    },[])
  return (
    <div>
    <h1 className='text-3xl text-center font-bold'>Jobs </h1>
      {
        jobs.map((job,index)=>{
          return <Card data={job} key={index}></Card>
        })
      }
    </div>
  )
}

export default Jobs
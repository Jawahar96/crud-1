import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Studentview() {
    const params=useParams()
    console.log(params);
const [searchparams,setSearchParams]=useSearchParams()
console.log(...searchparams);

const [studentData,setStudentData]=useState({})

useEffect(()=>{
loadUser()
},[])

let loadUser= async() =>{
  try{

   let student= await axios.get(`https://641c669b1a68dc9e4608a87e.mockapi.io/student/${params.id}`)
   setStudentData(student.data)
  }catch(error){

}}

  
  return (

    <div>
    {/* <h2>{studentData.name}</h2>
    <h2>{studentData.Age}</h2>
    <h2>{studentData.Email}</h2>
    <h2>{studentData.Mobileno}</h2>
    <h2>{studentData.Startdate}</h2>
    <h2>{studentData.TeachersId}</h2>
    <h2>{studentData.Class}</h2>

    <h2>{studentData.Subject}</h2> */}

    <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Student Id : {studentData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-warning" style={{fontSize : "20px"}}>
          <h5 className="card-title">Name : {studentData.name}</h5>
          <h5 className='card-title'>Age :{studentData.Age}</h5>
          <h5 className='card-title'>Email :{studentData.Email}</h5>
          <h5 className='card-title'>Mobileno :{studentData.Mobileno}</h5>
          <h5 className="card-title">Class : {studentData.class}</h5>
          <h5 className="card-title">Subject : {studentData.subject}</h5>
          <h5 className="card-title">Teacher Id : {studentData.teacherid}</h5>
          <h5 className="card-title">Start Date : {studentData.startdate}</h5>
          
         
          
      </div></div></div>
     
      
  )
}

export default Studentview
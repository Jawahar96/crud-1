import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Student() {
    const [students,setStudents]=useState([])
    const[isLoading,setLoading]=useState(false)

    useEffect(()=>{
        loadData();
    },[])
  
    let loadData=async()=>{
        setLoading(true)
        
    let students= await axios.get(
        'https://641c669b1a68dc9e4608a87e.mockapi.io/student'
        );
        setStudents(students.data)
        setLoading(false)
    }

let studentDelete = async(id)=>{
    
    try{
        let data=window.confirm("Are you sure you want to delete ")
        if(data){
            await axios (`https://641c669b1a68dc9e4608a87e.mockapi.io/student/${id}`)
        }
        loadData()
    } catch(error){
             }
        }
       


        
  return (
    <div>
     <div class="container-fluid">

<h1 class="h3 mb-2 text-gray-800">Tables</h1>
<div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Student</h1>
                        <Link to="/create-student" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Student</Link>
                    </div>

{
    isLoading ?<span>LOADING....</span>:<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                    <th>SI</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Mobileno</th>
                        <th>Start date</th>
                        <th>Teachers Id</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Mobileno</th>
                        <th>Teacher Id</th>
                        <th>Startdate</th>
                        <th>Class</th>
                        <th>Subject</th>
                         <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        students.map((student,index)=>{
                            return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.Age}</td>
                            <td>{student.Email}</td>
                            <td>{student.Mobileno}</td>
                            <td>{student.TeacherId}</td>
                            <td>{student.Startdate}</td>
                            <td>{student.Class}</td>
                            <td>{student.Subject}</td>
                            <Link to={`/student/${student.id}`} className='btn-btn-sm btn-primary'>View</Link>
                            <Link  to ={`//student/edit/${student.id}`}className='btn-btn-sm btn-warning'>Edit</Link>
                            <button  onClick={()=>studentDelete(student.id)} className='btn-btn-sm btn-danger'>Delete</button>
                          </tr>
                        })
                    }
                </tbody>
                
                    </table>
                    </div>
                    </div>
                    </div>
}

                    </div>
                    </div>
  )

}
export default Student
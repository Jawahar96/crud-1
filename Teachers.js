import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Teachers() {
   const[teachers,setTeachers]=useState([])
   const[isLoading,setLoading]=useState(false)

    useEffect(()=>{
       loadData();
    },[])

    let loadData=async()=>{
        setLoading(true)
        
    let teachers= await axios.get(
        'https://64293caeebb1476fcc4553df.mockapi.io/teacher'
        );
        setTeachers(teachers.data)
        setLoading(false)
    }
  


let teacherDelete = async(id)=>{
    
    try{
        let data=window.confirm("Are you sure you want to delete ")
        if(data){
            await axios (`https://64293caeebb1476fcc4553df.mockapi.io/teacher${id}`)
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
                        <h1 class="h3 mb-0 text-gray-800">Teacher</h1>
                        <Link to="/create-teacher" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Teacher</Link>
                    </div>


    {
       isLoading?<span>LOADING....</span>:<div class="card shadow mb-4">
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
                        <th>Joining date</th>
                        <th>Student Id</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                
                    <tr>
                        <th>Name</th>
                        
                        <th>Student Id</th>
                        <th>Joiningdate</th>
                        <th>Class</th>
                        <th>Subject</th>
                         <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        teachers.map((teacher,index)=>{
                            return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.StudentId}</td>
                            <td>{teacher.Joiningdate}</td>
                            <td>{teacher.Class}</td>
                            <td>{teacher.Subject}</td>
                            <Link to={`/teacher/${teacher.id}`} className='btn-btn-sm btn-primary'>View</Link>
                            <Link  to ={`/teacher/edit/${teacher.id}`} className='btn-btn-sm btn-warning'>Edit</Link>
                            <button  onClick={()=>teacherDelete(teacher.id)} className='btn-btn-sm btn-danger'>Delete</button>
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
export default Teachers
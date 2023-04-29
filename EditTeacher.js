import React, { useEffect } from 'react'
import {formik,useFormik} from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditTeacher() {
  const params=useParams()
  const navigate=useNavigate()
         const formik= useFormik({
    initialValues : {
        name :"",
        Age :"",
        Email :"",
        Mobileno : "",
        TeachersId :"",
        Startdate : "",
        Class :"",
        Subject : ""

    },
    validate :(values)=>{

      let errors={};
     if(values.name ==="" &&  values.name.length < 5){
      errors.name ="Enter a valid  name"
     }

     if(values.Age=""){
      errors.Position="Enter valid Age"
     }

     return errors;

    },

    validate :(values)=>{
        let errors = {}
        if (values.name === "") {
            errors.name = "Please enter name"
        }
       

        if (values.Joiningdate === "") {
            errors.Startdate = "Please enter Stardate"
        }
        if (values.Class === "") {
            errors.Class = "Please enter Class"
        }

        if (values.StudentId === "") {
            errors.StudentId = "Please enter Studentid"
        }
        if (values.Subject === "") {
            errors.Subject = "Please enter Subject"
        }
        return errors
    },
    onSubmit : async (values)=>{
     let  teachers=await axios.put(`https://64293caeebb1476fcc4553df.mockapi.io/teacher/${params.id}`,values)
     alert("Teachers details updated");
     navigate('/teachers')

    }
  });


  useEffect(()=>{
    loadUser()
  },[])

  let loadUser=async()=>{
    try{
      let teachers=await axios.get(`https://64293caeebb1476fcc4553df.mockapi.io/teacher/${params.id}`)

      formik.setValues({
      
          name:teachers.data.name,
          Joiningdate:teachers.data.Joiningdate,
          Class:teachers.data.Class,
          StudentId :teachers.data.StudentId,
          Subject:teachers.data.Subject
      })
    }catch(error){

    }
  }
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label>Student name</label>
          <input className='form-control' type={'text'} 
          value={formik.values.name}
            onChange={formik.handleChange} 
            name='name'
            />
            <span style={{color :"red"}}>{formik.errors.name}</span>
         
        </div>
     
      
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Joining date</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Joiningdate}
          onChange={formik.handleChange} 
          name='Joining date'
     

          />
          <div className='container'>
        <div className='row'>

        </div>
        <div className='col-lg-6'>
        <label>StudentId</label>
          <input className='form-control' type={'text'} 
          value={formik.values.StudentId}
          onChange={formik.handleChange} 
          name='StudentId'/>
          </div>
        </div>
        </div>
        </div>
        
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Class</label>
          <input className='form-control' type={'text'} value={formik.values.Class}
        onChange={formik.handleChange}
        name='Class'

          />
          

        </div>

</div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Subject</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.Subject}
          onChange={formik.handleChange}
          name='Subject'

          />
</div>
        </div>
</div>
<div className='col-lg-6'>
  <button className='btn-btn-sm btn-success ' disabled={!formik.isValid}>Register
    
  </button>
</div>
</div></div>
</form>
</div>
</div>

  
  )
}

export default EditTeacher
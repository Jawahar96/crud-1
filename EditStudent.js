import React, { useEffect } from 'react'
import {formik,useFormik} from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
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
        if (values.Age === "") {
            errors.Age = "Please enter Age"
        }
        if (values.Email === "") {
            errors.Email = "Please enter Email"

        }
        if (values.Mobileno === "") {
            errors.Mobileno = "Please enter Mobileno"
        }

        if (values.Startdate === "") {
            errors.Startdate = "Please enter Stardate"
        }
        if (values.Class === "") {
            errors.Class = "Please enter Class"
        }

        if (values.TeachersId === "") {
            errors.TeachersId = "Please enter Teacherid"
        }
        if (values.Subject === "") {
            errors.Subject = "Please enter Subject"
        }
        return errors
    },
    onSubmit : async (values)=>{
     let student=await axios.put(`https://641c669b1a68dc9e4608a87e.mockapi.io/student/${params.id}`,values)
     alert("Student details is updated");
     navigate('/student')

    }
  });


  useEffect(()=>{
    loadUser()
  },[])

  let loadUser=async()=>{
    try{
      let student=await axios.get(`https://641c669b1a68dc9e4608a87e.mockapi.io/student/${params.id}`)

      formik.setValues({
      
        name:student.data.name,
        Age:student.data.Age,
        Email:student.data.Email,
        Mobileno:student.data.Mobileno,
         Startdate:student.data.startdate,
          Class:student.data.Class,
        TeachersId : student.data.TeachersId,
        Subject:student.data.Subject
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
          <label>User name</label>
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
          <label>Age</label>
          <input className={`form-control ${formik.errors.Age ? `input-error` : ``}`} type={'text'} 
          value={formik.values.Age}
          onChange={formik.handleChange} 
            name='Age'

          />

        </div>
        </div>

        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Email</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Email}
          onChange={formik.handleChange} 
            name='Email' />
          
        </div>
        </div></div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Mobileno</label>
          <input className='form-control' type={'text'}
            value={formik.values.Mobileno}
            onChange={formik.handleChange}
            name='Mobileno'

          />


        </div></div>
        </div>

        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Start date</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Startdate}
          onChange={formik.handleChange} 
          name='Start date'
     

          />
          <div className='container'>
        <div className='row'>

        </div>
        <div className='col-lg-6'>
        <label>TeacherId</label>
          <input className='form-control' type={'text'} 
          value={formik.values.TeachersId}
          onChange={formik.handleChange} 
          name='TeachersId'/>
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
l
          />
</div>
        </div>
</div>
<div className='col-lg-6'>
  <button className='btn-btn-sm btn-success ' disabled={!formik.isValid}>Register
    
  </button>
</div>
</div></div></div>
</form>
</div>
</div>

  
  )
}

export default EditStudent
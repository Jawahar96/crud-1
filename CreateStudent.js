import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
let navigate=useNavigate()
  const formik=useFormik({
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
      let errors={}
      if(values.name=== ""){
      errors.name("Enter a name")

    }
    if(values.Age=== ""){
    errors.name("Enter a Age")
    }
    if(values.Email=== ""){
      errors.name("Enter a Email")
      }
      if(values.Mobileno=== ""){
        errors.name("Enter a Mobileno")
        }
        if(values.Startdate=== ""){
          errors.name("Enter a Startdate")
          }

          if(values.Class=== ""){
            errors.name("Enter a Class")
            }
            if(values.Subject=== ""){
              errors.name("Enter a Subject")
              }
              if(values.TeachersId=== ""){
                errors.name("Enter a TeachersID")
                }
                return errors;
              },

              onSubmit :async (values)=>{
                let student=await axios.post(`https://641c669b1a68dc9e4608a87e.mockapi.io/student`,values)
                alert("Student created")
                navigate('/student');
              }
  });

 
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label style={{color:"blue"}}> Name</label>
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
          <input className={`form-control ${formik.errors.Position ? `input-error` : ``}`} type={'text'} 
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
            name='Mobile no'

          />


        </div></div>
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>TeacherId</label>
          <input className='form-control' type={'text'}
            value={formik.values.TeachersId}
            onChange={formik.handleChange}
            name='TeachersId'/>
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
        <div className='col-lg-6'></div>
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
  <button className='btn-btn-sm btn-success '  disabled={!formik.isValid}>Register
    
  </button>
</div>
</div></div></div>
</form>
</div>
</div>

  
  )
}

export default CreateStudent
import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateTeacher() {
let navigate=useNavigate()
  const formik=useFormik({
    initialValues : {
      name :"",
      StudentId :"",
      Startdate : "",
      Class :"",
      Subject : ""

    },
    validate :(values)=>{
      let errors={}
      if(values.name=== ""){
      errors.name("Enter a name")

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
                let teacher=await axios.post(`https://64293caeebb1476fcc4553df.mockapi.io/teacher`,values)
                alert("Teacher  created")
                navigate('/teacher');
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
     


        
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Student Id</label>
          <input className='form-control' type={'text'}
            value={formik.values.StudentId}
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
</div>
</form>
</div>
</div>

  
  )
}

export default CreateTeacher
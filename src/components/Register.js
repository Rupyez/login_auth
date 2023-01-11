import React, { useState } from "react";
import '../styles/Register.css'
import { Link } from "react-router-dom";
import avatar from '../assests/profile.png'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik'
import { registerValidate} from '../helper/validate';
import convertToBase64 from "../helper/convert";


export default function Register() {

// state for image upload
const [file, setFile] = useState()


const formik = useFormik({
  initialValues:{username:'', email:'', password:''},
  validate:registerValidate,
  validateonBlur:false,
  validateOnChange:false,
  onSubmit: async values =>{
    values = await Object.assign(values, {profile:file || ''})
    console.log(values)
  }
})

// formik doesnot support file upload so we need to create this handler
const onUpload = async e =>{
  const base64 = await convertToBase64(e.target.files[0]) ;
  setFile(base64)
}


  return (
    <div class="container">
       <Toaster position='top-center' reverseOrder={false}></Toaster>

    <div class="card">
      <div class="row">
       <div class="col-md-6">
         <div class="myLeftCtn">


         <form class="myForm text-center" onSubmit={formik.handleSubmit}>
          <h4>Create New Account</h4>

            <div class="form-group">

               <div>
               <label htmlFor="profile">
                  <img src={file || avatar} class='img-fluid' alt='avatar' className='myImage'/>
                  </label>
                  <input onChange={onUpload} class='mt-2' type='file' id='profile' name='profile'/>
                </div>

                  
                  <input {...formik.getFieldProps('username')} className="myInput" type="text" placeholder="Username" id="username" required/>
                  <div class="invalid-feedback">Please fill out this field</div>

                  <input {...formik.getFieldProps('email')} className="myInput" type="text" placeholder="Email" id="email" required/>
                  <div class="invalid-feedback">Please fill out this field</div>

                  <input {...formik.getFieldProps('password')} className="myInput" type="password" placeholder="Password" id="password" required/>
                  <div class="invalid-feedback">Please fill out this field</div>


                  <input id="check_1" class="myCheckbox" className="my_Checkbox" name="check_1" type="checkbox" required/>
                  <span className="check_remember">Remember Me</span>
            </div>       
       </form>
             <button type="button" class="btn btn-primary">Create New Account</button>
             <div class='py-3'>
                <span className='span_remember'>Already Register<Link to='/'>Login</Link></span>
              </div>
   </div>
  </div>


            <div class='col-md-6'>
                <div class='myRightctn'>
                <div class='box'>
                  <h4>Hello World</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus dolor mauris, consectetur tristique enim semper non. Nulla et ante vitae erat scelerisque tincidunt. Suspendisse ultricies fermentum sodales. Praesent quis eros accumsan, tincidunt lectus nec, sodales ipsum. Aliquam fermentum metus metus, id porttitor diam consectetur eget.</p>
                  <button type="button" class='butt_out'>Learn More</button>
                </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

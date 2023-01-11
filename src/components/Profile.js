import React, { useState } from "react";
import '../styles/Profile.css'
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
    <div class="container-fluid">
       <Toaster position='top-center' reverseOrder={false}></Toaster>

    <div class="card">
      <div class="row">
       <div class="col-md-12">
         <div class="myLeftCtn">
         <form class="myForm text-center" onSubmit={formik.handleSubmit}>
          <h4>Profile</h4>
            <div class="form-group">

            {/* for image */}
               <div>
               <label htmlFor="profile">
                  <img src={file || avatar} class='img-fluid' alt='avatar' className='myImage'/>
                  </label>
                  <input onChange={onUpload} class='mt-2' type='file' id='profile' name='profile'/>
                </div>

                  {/* for input */}

                  <div className="d-flex flex-wrap">
                  <input {...formik.getFieldProps('firstname')} className="myInput" type="text" placeholder="First Name" id="firstname" required/>
                  <input {...formik.getFieldProps('lastname')} className="myInput" type="text" placeholder="Last Name" id="lastname" required/>
                  </div>

                  <div className="d-flex flex-wrap">
                  <input {...formik.getFieldProps('username')} className="myInput" type="text" placeholder="Username" id="username" required/>
                  <input {...formik.getFieldProps('email')} className="myInput" type="text" placeholder="Email" id="email" required/>
                  </div>

                  <div className="d-flex flex-wrap">
                  <input {...formik.getFieldProps('password')} className="myInput" type="password" placeholder="Password" id="password" required/>
                  <input {...formik.getFieldProps('mobile')} className="myInput" type="mobile" placeholder="Mobile No." id="mobile" required/>
                  </div>

                  <div className="d-flex flex-wrap">
                 <input {...formik.getFieldProps('address')} className="myInput" type="address" placeholder="Address" id="address" required/>
                <button type="button" class="btn btn-primary btn-sm px-5">Update</button> 
                </div>
            </div>       
       </form>

             {/* for button */}
             <div class='py-3'>
                <span className='span_remember'>Come back later<button to='/' class='btn btn-primary btn-sm'>Logout</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

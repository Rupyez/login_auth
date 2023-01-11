import React from 'react'

import '../styles/Reset.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik'
import { resetPasswordValidate } from '../helper/validate';

export default function Reset() {
const formik = useFormik ({
  initialValues:{password:'', confirm_pwd:''},

  validate:resetPasswordValidate,
  validateonBlur:false,
  validateOnChange:false,
  onSubmit: async values =>{
    console.log(values)
  }
})

  return (
    <div class="container">
    <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div class="card">
        <div class="row">
          
            <div class="myLeftCtn">
              <form class="myForm text-center mb-3" onSubmit={formik.handleSubmit}>
                <h4>Reset</h4>
                <span class='font-bold text-xl'>Enter New Password</span>
                 <div class="form-group">
                  
                <input {...formik.getFieldProps('password')} className="myInput" type="password" placeholder="New Password" id="password"required/>
                <input {...formik.getFieldProps('confirm_pwd')} className="myInput" type="password" placeholder="Confirm Password" id="password"required/>

                  <div class="invalid-feedback">Please fill out this field</div>
                </div>

              </form>

              <button type="button" class="butt_out">Sign In</button>
             
            </div>
            </div>
        </div>
      </div>
    
  );
}

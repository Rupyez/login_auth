import React from 'react'
import avatar from '../assests/profile.png'
import { Link } from 'react-router-dom'
import '../styles/Password.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik'
import { passwordValidate } from '../helper/validate';


export default function Password() {
const formik = useFormik ({
  initialValues:{password:''},

  validate:passwordValidate,
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
                <h4>Hello Again!</h4>

                <div class='mb-5'>
                  <img src={avatar} class='img-fluid' alt='avatar' className='myImage'/>
                </div>

                <div class="form-group">
                  <i class="fas fa-user"></i>
                  <input
                  {...formik.getFieldProps('password')}
                    className="myInput"
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </form>

              <button type="button" class="butt_out">Sign Up</button>
              <div class='py-3'>
                <span className='span_remember'>Forget Password<Link to='/recovery'>Recover Now</Link></span>
              </div>
            </div>
            </div>
        </div>
      </div>
    
  );
}

import React, { useEffect } from 'react'
import avatar from '../assests/profile.png'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Password.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik'
import { usernameValidate } from '../helper/validate';
import {useAuthStore} from '../store/store'

export default function UserName() {

const navigate = useNavigate()
const setUsername = useAuthStore(state => state.setUsername)
const username = useAuthStore(state => state.auth.username)

useEffect(()=>{
  console.log(username)
})

const formik = useFormik ({
  initialValues:{username:''},

  validate:usernameValidate,
  validateonBlur:false,
  validateOnChange:false,
  onSubmit: async values =>{
    // console.log(values)
    setUsername(values.username)
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
                  {...formik.getFieldProps('username')}
                    className="myInput"
                    type="username"
                    placeholder="Username"
                    id="username"
                    required
                  />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </form>

              <button type="button" class="butt_out">Let's Go</button>
              <div class='py-3'>
                <span className='span_remember'>Not a Member<Link to='/register'>Register</Link></span>
              </div>
            </div>
            </div>


           
        </div>
      </div>
    
  );
}

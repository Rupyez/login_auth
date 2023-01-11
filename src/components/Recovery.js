import React from 'react'
import '../styles/Recovery.css'


export default function Recovery() {


  return (
    <div class="container">
   
      <div class="card">
        <div class="row">
          
            <div class="myLeftCtn">
              <form class="myForm text-center mb-3">
                <h4 class='mb-3'>Recovery</h4>
                <p class='text-xl font-bold'>Enter OTP to recover the password</p>
                
                <span className='span_otp'>Enter six digits OTP sent to your email address</span>
                <div class="form-group">
                  <i class="fas fa-user"></i>
                  <input
                    className="myInput"
                    type="password"
                    placeholder="OTP"
                    id="password"
                    required
                  />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
              </form>

              <button type="button" class="butt_out">Sign Up</button>
              <div class='py-3'>
                <span className='span_remember'>Can't get OTP?<button class='btn btn-primary btn-sm'>Resend</button></span>
              </div>
            </div>
            </div>
        </div>
      </div>
    
  );
}


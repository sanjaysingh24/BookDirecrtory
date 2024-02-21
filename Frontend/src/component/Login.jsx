import React from 'react'
import './Style.css'
const Login = () => {
  return (
   <>
  
        <section className="login_bg">
      <div className="container ">
        <div className="row justify-content-center align-items-center">
        
          <div className="col-lg-6 login_right_section">

            <div className="form_container">
              <h2 className=" text-center">User login</h2>
              <form >
                 {/* <div className="mb-3">
                    <input type="email" className="custom_form w-100" id="floatingInput" placeholder="Enter your email"/>
                  
                  </div>  */}
                  <div className="mb-3">
                    <input type="text" className=" custom_form  w-100" id="floatingName" placeholder="username" name="username"/>
                 
                  </div>
                  <div className="mb-3">
                    <input type="password" className="custom_form w-100" id="floatingPassword" placeholder="Password" name ="password"/>
              
                  </div>
                  <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1"
                    >i agree to the all Statement  in <b><u>Terms of Service</u></b></label
                  >
                </div>
               <div className="text-center">
                <button type="submit" className="btn  btn_styling text-white">Login</button>
                 <p> <span><a href="/register"><u>New here Register here</u></a></span></p>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

   
   
   </>
  )
}

export default Login

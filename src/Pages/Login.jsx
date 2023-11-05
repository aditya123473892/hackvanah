import React from 'react';



function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100"> {/* Center the form */}
      <div className="card p-4" style={{ width: '400px' }}> {/* Increase the card width for a bigger form */}
        <div className="card-header">Login</div>
        <div className="card-body">
          <form>
          
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter your password" />
            </div>
       
            <button type="submit" className="btn btn-primary btn-lg mt-2">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

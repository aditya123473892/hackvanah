import React from 'react';



function Signup() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100"> {/* Center the form */}
      <div className="card p-4" style={{ width: '400px' }}> {/* Increase the card width for a bigger form */}
        <div className="card-header">Signup</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control form-control-lg" id="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Select</label>
              <select className="form-control form-control-lg" id="gender">
                <option value="">Select Role</option>
                <option value="male">Teacher</option>
                <option value="female">Student</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-lg mt-2">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

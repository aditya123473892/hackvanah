// UserProfile.js
import React from 'react';
import Navbar from '../Comps/Navbar';
import Studentsnav from '../Comps/Studentsnav'

function Profile() {
  return (
    <div>
        <Studentsnav></Studentsnav>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">User Profile</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6it90khGsiNuZLQ-JTmnJeGjYAWRCTTyy01cxwxj6&s"
                    alt="User Profile"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Lalit Sarasawat</h3>
                  <p>lalitsaraswar@gmail.com</p>
                  <p>RAJ KUMAR GOEL ENGINEERING COLLEGE</p>
                  <p>2021b1541151</p>
                  <p>Btech</p>
                   </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
    </div>

    
  );
}

export default Profile;

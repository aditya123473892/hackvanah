import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <div className="container mt-5">
      <div className="row">
      

        <div className="col-md-4 mt-2">
          <div className="card card-custom bg-custom-2"> {/* Apply the custom class here */}
            <div className="card-body">
              <h5 className="card-title">My Subjects</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, consequatur esse eos cum facilis quo eum blanditiis culpa? Sint molestiae harum vitae aperiam repellendus cupiditate, illum exercitationem omnis. Eaque, similique?
            
                  </p>
              <Link to="/subject" className="btn bg-dark btn-custom">Go</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2">
          <div className="card card-custom bg-custom-3"> {/* Apply the custom class here */}
            <div className="card-body">
              <h5 className="card-title">View Resources</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, consequatur esse eos cum facilis quo eum blanditiis culpa? Sint molestiae harum vitae aperiam repellendus cupiditate, illum exercitationem omnis. Eaque, similique?
            
              </p>
              <Link to="/subject" className="btn bg-dark btn-custom">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="card card-custom bg-custom-4"> {/* Apply the custom class here */}
            <div className="card-body">
              <h5 className="card-title">Add resources</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, consequatur esse eos cum facilis quo eum blanditiis culpa? Sint molestiae harum vitae aperiam repellendus cupiditate, illum exercitationem omnis. Eaque, similique?
            
              </p>
              <Link to="/subject" className="btn bg-dark btn-custom">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="card card-custom bg-custom-5"> {/* Apply the custom class here */}
            <div className="card-body">
              <h5 className="card-title">My-feedback</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, consequatur esse eos cum facilis quo eum blanditiis culpa? Sint molestiae harum vitae aperiam repellendus cupiditate, illum exercitationem omnis. Eaque, similique?
            
              </p>
              <Link to="/subject" className="btn bg-dark btn-custom">Go</Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

import React, { Component } from 'react';
import Navbar from '../Comps/Navbar';
import '../Pages/pages.css'

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      description: '',
      price: 0,
      // Add more fields as needed
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log(this.state); // Replace with your API call
  }

  render() {
    return (
      <div>
        <Navbar />
       
        <div className="container d-flex justify-content-center align-items-center form-container" style={{ height: '100vh' }}>
          <div className="form-container">
            <h2>Add Units</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Unit Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={this.state.productName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Unit Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={this.state.productName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Unit Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={this.state.productName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
           
           
              {/* Add more fields as needed */}
              <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;

import React, { Component } from 'react';
import {BrowserRouter as Link } from 'react-router-dom';
class OldProduct extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
  <div className="wrapper wrapper--w680">
    <div className="card card-4">
      <div className="card-body">
        <h2 className="title">Input Form</h2>
        <form method="POST">
          <div className="row row-space">
            <div className="col-2">
              <div className="input-group">
                <label className="label">Product ID</label>
                <input className="input--style-4" type="text" name="product_id" />
                </div>
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Quantity</label>
                  <input className="input--style-4" type="number" name="quantity" />
                </div>
              </div>
              
            </div>
          </div>
          <div className="input-group">
            <label className="label" />
            <div className="p-t-10">
              <label className="radio-container m-r-45">
                <div className="radio-container">
                  <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                </div>
              </label>
              <label className="radio-container">
                <button className="btn btn--radius-2 btn--blue" type="button"><a href="/home"> Back </a></button>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default OldProduct;
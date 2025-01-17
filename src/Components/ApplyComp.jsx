import React from "react";

export default function ApplyComp() {
  return (
    <form className="row g-3">
      <label for="inputAddress" className="form-label">
        Full Name
      </label>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      <div className="col-12">
        <label for="inputAddress" className="form-label">
          Email ID
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">
          Contact No
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          placeholder="000-000-0000"
        />
      </div>

      <div className="col-12">
        <label for="inputAddress2" className="form-label">
          Last Qualifications
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="8th 10th 12th  Graduation..."
        />
      </div>

      <div className="col-md-4">
        <label for="inputState" className="form-label">
          State
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>Kolkata</option>
        </select>
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          placeholder="Enter your nearest airport city name"
        />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">
          Passport
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>Yes</option>
          <option>No</option>
          <option>Apply</option>
        </select>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

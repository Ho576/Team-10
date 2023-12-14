import React from "react";
import { Link } from "react-router-dom";

export default function AddPost() {
  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <h2>Dashboard</h2>
        <h3>Add Post</h3>
      </div>

      <form
        className="container"
        style={{ width: "26rem", marginTop: "100px" }}
      >
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form4Example1">
            Title
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <label className="form-label" for="form4Example3">
            Content
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
          style={{ marginRight: "10px" }}
        >
          Save
        </button>
        <Link to={'/'} className="btn btn-secondary btn block mb-4">
          Cancel
        </Link>
      </form>
    </>
  );
}

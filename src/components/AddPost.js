import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate,Link } from "react-router-dom";
 

export default function AddPost({ posts }) {
  const navigate = useNavigate();
  let [error1, SetError1] = useState(false);
  let [error2, SetError2] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const SpecialCharacters = (str) => {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };
  const validation = async () => {
    let i;
    SetError1(false);
    SetError2(false);
    for (i = 0; i < posts.length; i++) {
      if (posts[i].title == title) {
        SetError1(true);
        return;
      }
    }
    if (SpecialCharacters(title)) {
      SetError2(true);
      return;
    }
    await addDoc(collection(db, "Blog Posts"), { title, content });
    navigate("/");
  };

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
          <label className="form-label" htmlFor="form4Example1">
            Title
          </label>
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error1 && <p className="text-danger">Title already exists</p>}
          {error2 && (
            <p className="text-danger">Title contains special characters</p>
          )}
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
            Content
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
          style={{ marginRight: "10px" }}
          onClick={validation}
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

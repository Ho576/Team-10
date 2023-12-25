import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, useParams,Link } from "react-router-dom";


const Edit = ({ posts }) => {
  const navigate = useNavigate();
  const { postId } = useParams("postId");
  let i;
  for (i = 0; i < posts.length; i++) {
    if (posts[i].id == postId) {
      break;
    }
  }

  let [error1, setError1] = useState(false);
  let [error2, setError2] = useState(false);
  let [title, setTitle] = useState(posts[i]?.title);
  let [content, setContent] = useState(posts[i]?.content);
  const specialCharacters = (str) => {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };
  const update = async () => {
    let j;
    setError1(false);
    setError2(false);
    for (j = 0; j < posts.length && j != i; j++) {
      if (posts[j].title == title) {
        setError1(true);
        return;
      }
    }
    if (specialCharacters(title)) {
      setError2(true);
      return;
    }

    const ref = doc(db, "Blog Posts", postId);
    await updateDoc(ref, { title, content });
    navigate("/");
  };
  return (
    /*html*/
    <div>
      <div style={{ marginLeft: "20px" }}>
        <h2>Dashboard</h2>
        <h3>Edit post</h3>
      </div>

      <form
        className="container"
        style={{ width: "26rem", marginTop: "100px" }}
      >
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="Title">
            Title
          </label>
          <input
            type="text"
            id="Title"
            className="form-control"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          {error1 && <p className="text-danger">The title already exists</p>}
          {error2 && (
            <p className="text-danger">The title has special character </p>
          )}
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="Content">
            Content
          </label>
          <textarea
            className="form-control"
            id="Content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            rows={4}
            defaultValue={content}
          />
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={update}
          style={{ marginRight: "10px" }}
        >
          Save
        </button>
         <Link to={'/'} className="btn btn-secondary btn block mb-4">
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default Edit;

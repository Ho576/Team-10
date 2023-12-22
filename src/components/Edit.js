import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";


const Edit = ({posts}) =>{
const navigate = useNavigate();
const {postId} =useParams('postId');
let [error1, SetError1] = useState(false);
  let [error2, SetError2] = useState(false);
  const SpecialCharacters = (str) => {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };
let i;
   for ( i=0;i<posts.length ; i++){
    if(posts[i]?.id == postId){
    break;
  }
   }
   
const [title,setTitle] = useState(posts[i]?.title);
const [content,setContent] = useState(posts[i]?.content);

const update=async()=>{
  let j;
    SetError1(false);
    SetError2(false);
    for (j = 0; j < posts.length&&j!=i; j++) {
      if (posts[j].title == title) {
        SetError1(true);
        return;
      }
    }
    if (SpecialCharacters(title)) {
      SetError2(true);
      return;
    }
    
    const ref = doc(db, "Blog Posts", postId);
    await updateDoc(ref, {
      title, content
    });
    navigate("/");
    
};

return(
  <>
  <div style={{ marginLeft: "20px" }}>
    <h2>Dashboard</h2>
    <h3>Edit Post</h3>
  </div>

  <form
    className="container"
    style={{ width: "26rem", marginTop: "100px" }}
  >
    <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" for="form4Example1">
        Title
      </label>
      <input type="text" id="form4Example1" className="form-control"
      onChange={(e)=>{setTitle(e.target.value)}}
      value={title}
      />
    </div>
    {error1 && <p className="text-danger">Title already exists</p>}
    {error2 && <p className="text-danger">Title contains special characters</p>}

    <div data-mdb-input-init class="form-outline mb-4">
      <label className="form-label" for="form4Example3">
        Content
      </label>
      <textarea
        className="form-control"
        id="form4Example3"
        rows="4"
        onChange={(e)=>{setContent(e.target.value)}}
        value={content}
      ></textarea>
    </div>

    <button
      data-mdb-ripple-init
      type="button"
      className="btn btn-primary btn-block mb-4"
      style={{ marginRight: "10px" }}
      onClick={update}
    >
      Save
    </button>
    <Link to={'/'} className="btn btn-secondary btn block mb-4">
      Cancel
    </Link>
  </form>
</>
)


}
export default Edit
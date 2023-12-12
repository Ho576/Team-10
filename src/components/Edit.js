const Edit = () =>{

return(
    /*html*/
    <div> 
      <div style={{ marginLeft: "20px" }}>
    <h2>Dashboard</h2>  
    <h3>Edit post</h3>  
    </div>
    
    <form className="container"  style={{ width: "26rem", marginTop: "100px" }}> 
 
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example2">Title</label>
    <input type="text" id="form4Example2" className="form-control" />
   
  </div>
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form4Example3">Content</label>
    <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""} />
    
  </div>
  
    

  <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
          style={{ marginRight: "10px" }}
        >
          Save
        </button>
        <a href className="btn btn-secondary btn block mb-4">           Cancel         </a></form>
</div>

)


}
export default Edit
const Navbar = ({toggleSidebar} ) => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
  
  <a className="navbar-brand ps-3" href="#!">Start Bootstrap</a>
  
  <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 text-white" id="sidebarToggle" href="#!"><i className="bi bi-list" onClick={toggleSidebar} />
</button>

  
  <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    <div className="input-group">
      <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
      <button className="btn btn-primary" id="btnNavbarSearch" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
    </div>   
  </form>
  
  <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg className="svg-inline--fa fa-user fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg>
          <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg></a>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#!">Settings</a></li>
        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#!">Logout</a></li>
      </ul>
    </li>
  </ul>
</nav>

  );
};
export default Navbar;

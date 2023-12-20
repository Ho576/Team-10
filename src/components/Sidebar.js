import React, { useState } from 'react'
import './Sidebar.css'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer';

export default function Sidebar({isSidebarOpen}) {
  

  return (
    <div id="layoutSidenav" className={`mySidebar ${isSidebarOpen ? 'open' : 'closed'}`} >
    <div id="layoutSidenav_nav ">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu myNav">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to={'/'}>
              <div className="sb-nav-link-icon"><i className="bi bi-speedometer2 text-white" /></div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
              <div className="sb-nav-link-icon"><i className="bi bi-layout-split text-wihte" /></div>
              Layouts
              <div className="sb-sidenav-collapse-arrow"><i className="bi bi-chevron-down text-white" /></div>
            </a>
            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="#">Static Navigation</a>
                <a className="nav-link" href="#">Light Sidenav</a>
              </nav>
            </div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
              <div className="sb-nav-link-icon"><i className="bi bi-book-fill text-white" /></div>
              Pages
              <div className="sb-sidenav-collapse-arrow"><i className="bi bi-chevron-down text-white" /></div>
            </a>
            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                  Authentication
                  <div className="sb-sidenav-collapse-arrow"><i className="bi bi-chevron-down text-white" /></div>
                </a>
                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="#">Login</a>
                    <a className="nav-link" href="#">Register</a>
                    <a className="nav-link" href="#">Forgot Password</a>
                  </nav>
                </div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                  Error
                  <div className="sb-sidenav-collapse-arrow"><i className="bi bi-chevron-down text-white" /></div>
                </a>
                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="#">401 Page</a>
                    <a className="nav-link" href="#">404 Page</a>
                    <a className="nav-link" href="#">500 Page</a>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <a className="nav-link" href="#">
              <div className="sb-nav-link-icon"><i className="bi bi-graph-up text-white" /></div>
              Charts
            </a>
            <a className="nav-link" href="#">
              <div className="sb-nav-link-icon"><i className="bi bi-table text-white" /></div>
              Tables
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
   <div className='cont'>
   <div className='contentt'>
        <Outlet/>
        
    </div>
    
    <Footer/>
   </div>
    
  
    </div>
    


  )
}

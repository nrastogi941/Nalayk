import React from "react";
// import { a } from "react-router-dom";
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">


                        <nav id="mynavbar" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a  className="navbar-brand logo" href="#">&lt; <span className="logo" >Nimit Rastogi /</span> 	&gt;</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item" >
                                            <a  className="nav-link active" aria-current="page" href="">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#section-2">Education</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link active" href="#section-3">Skills</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#section-4">CP</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#section-5">Project</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#section-6">Journey</a>
                                        </li>
                                        <li className="nav-item" >
                                        <a className="nav-link active" href="#section-7">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Navbar;
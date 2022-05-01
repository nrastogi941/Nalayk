import React from "react";
import { NavLink } from "react-router-dom";

const Project = () => {
    return (
        <>
            <section  id="section-4" className="project mb-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="container">
                    <div className="row text-center mt-5">
                        <div className="col">
                            <h5 className="heading_top">PROJECT</h5>
                        </div>
                    </div>

                    <div className="row text-center mb-5 heading_para">
                        <div className="col">
                            <p>Learning new things while experimenting and creating something is the best possible way, in my opinion.<br></br> I build projects that make me happy in the final Lap.</p>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col-md-4 col-12 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-running"> CCU CLUB</i></h5>
                                    <p className="card-text">Now Student can join Hobby club of their choice through a single website <strong>"Club Of CSJM University."</strong></p>
                                    <ul className="list-inline mt-4">
                                        <li><div className="circle" style={{ backgroundColor: "yellow" }}></div><p>HTML</p></li>
                                        <li><div className="circle" style={{ backgroundColor: "green" }}></div><p>CSS</p></li>
                                        <li><div className="circle" style={{ backgroundColor: "#d320ac" }}></div><p>Bootstrap</p></li>
                                        <li><div className="circle" style={{ backgroundColor: "#000" }}></div><p>PHP</p></li>
                                        <li><div className="circle" style={{ backgroundColor: "#00f" }}></div><p>MySQL</p></li>
                                        <a  className="github" href="https://github.com/nrastogi941?tab=repositories" target="_blank"><li style={{ fontSize:"25px",fontWeight:900,color:"#000" }} ><i className="fab fa-github"></i></li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-user-graduate"> Protfolio</i></h5>
                                    <p className="card-text">This is my personal Website which gives a brief desciotion about me ,my passion,my achievement and my journey.</p>
                                    <ul className="list-inline mt-4">
                                        <li><div className="circle" style={{ backgroundColor: "yellow" }}></div><p>ECMA6</p></li>
                                        <li><div className="circle" style={{ backgroundColor: "green" }}></div><p>React.js</p></li>
                                        <li><div className="circle" style={{ backgroundColor: "#d320ac" }}></div><p>Bootstrap</p></li>
                                        <a  className="github" href="https://github.com/nrastogi941?tab=repositories" target="_blank"><li style={{ fontSize:"25px",fontWeight:900,color:"#000" }} ><i className="fab fa-github"></i></li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;
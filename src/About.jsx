import React from "react";
import { NavLink } from "react-router-dom";
import Protfolio from "./images/protfolio.png";
import "./Style.css";

const About = () => {
    return (
        <>
        {/* <section id="section-1"> */}
            <section id="header" className="mt-5 "  data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="conatiner text-center">
                                <div className="row">
                                    <div className="col-lg-6 col-12 pt-5 pt-lg-0  order-lg-1 order-2 vertically_center  ">
                                    {/* <div  style={{ border: "2px solid black", marginTop:200}}> */}
                                        <h1> Hi, I 'm  <strong className="brand-name"> Nimit Rastogi</strong></h1>
                                        <h5 className=""> Competitive Programmer, Front End web developer </h5>
                                         {/* <div className="mt-3"> */}
                                        <a  href="https://drive.google.com/file/d/1UhH3Zc0GIO_hJj2m3HRUWO1WSKNwOJW_/view?usp=sharing" className="btn btn-get-started" target="_blank"> Resume(Open to Work)</a>
                                        {/* </div>  */}
                                        {/* </div> */}
                                    </div>
                                    <div className="col-md-6 col-12 header-img  order-1">
                                        <img src={Protfolio} className="img-fluid animated" alt="protfolio_img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </section> */}
        </>
    );
};

export default About;

import React from "react";
// import {AccessTimeIcon} from '@mui/icons-material/AccessTime';
import BreakLeft from "./images/breakleft.svg";
import BreakRight from "./images/breakright.svg";
import Schooling from "./images/schooling.svg";
import Graduation from "./images/graduation.svg";
import Compete from "./images/lastcomputer.svg";
import "./Style.css";


const Myjourney = () => {
    return (
        <>
            <section  id="section-6"  className="journey-sec mt-5" style={{ border: "2px solid rd" }} data-aos="fade-down">
                <div className="container text-center mb-5">
                    <div className="row mb-3">
                        <div className="col">
                            <h1 className="heading_top">My journey</h1>
                        </div>
                    </div>
                    <div className="row heading_para">
                        <div className="col-12">
                            <p> My journey has been a very educational one because I've chosen to make the <br />
                                best of every opportunity that I've had along the way, no matter what.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container text-center journey-h4-p" data-aos="fade-left">
                    <div className="row ">
                        <div className="col">
                            <h4>Schooling</h4>
                        </div>
                    </div>
                    <div className="row" style={{ border: "2px solid whitw" }}>
                        <div className="col-md-8 col-12 mt-5 order-md-1 order-2">
                            <p>I grew up in Shaktinagar, a small peaceful town, for most of my life. Did my schooling at D.A.V Public School .
                            Till 10th standard, I focused both on my studies and co-curricular activities equally and excelled in both. My niche used to be and is oratory and quizzing competitions. During my preparation for JEE, I was totally soaked into securing a good rank and qualifying for competitive exams.</p>
                        </div>
                        <div className="col-md-4 col-12 order-1">
                            <img src={Schooling} className="img-fluid" alt="journey_photo_1" height={300} width={300} />
                        </div>
                    </div>
                </div>


                <div className="container text-center" >
                    <div className="row">
                        <div className="col">
                            <img src={BreakLeft} className="img-fluid" alt="breakable-point" />
                        </div>
                    </div>
                </div>

                <div className="container text-center journey-h4-p" data-aos="fade-right">
                    <div className="row ">
                        <div className="col">
                            <h4>College</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-12 mt-5 order-2">
                            <p>Currently, I'm a third year undergraduate Computer Science student at the University Institute Of Engineering And Technology, Kanpur.At present my CPI is 9.2 .
                            In the college connect my self with awesome seniors and friends. It has been a great learning experience in the college, and I hope that it will continue as it is going.</p>
                        </div>
                        <div className="col-md-4 col-12 order-1">
                            <img src={Graduation} className="img-fluid" alt="journey_photo_1" height={300} width={300} />
                        </div>
                    </div>
                </div>


                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <img src={BreakRight} className="img-fluid" alt="breakable-point" />
                        </div>
                    </div>
                </div>

                <div className="container text-center journey-h4-p" data-aos="fade-left">
                    <div className="row ">
                        <div className="col">
                            <h4>CP & Web-d</h4>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-8 col-12 mt-5 order-md-1 order-2">
                        <p>I got aware of Competitive Programmming and  Web Development in the holiday break of the first semester and started learning data structure and Algorithm .I have been exponentially increasing my knowledge about various frameworks also and their usage alongside expanding the span of my tech stack</p>
                        </div>
                        <div className="col-md-4 col-12 order-1" >
                            <img src={Compete} className="img-fluid" alt="journey_photo_1" height={300} width={300} />
                        </div>
                    </div>
                </div>



            </section>
        </>
    );
}


export default Myjourney;
import React from "react";
// import Skills from "./images/tools-solid.svg";
import Database from "./images/database-solid.svg";
import Competitive from "./images/laptop-code-solid.svg";
import PHP from "./images/php-brands.svg";
import Reacts from "./images/react-brands.svg";
import Development from "./images/globe-solid.svg";

const Skill = () => {
    return (
        <>
            <section className="skill " data-aos="zoom-in"  id="section-3" >
                <div className="container ">
                    <div className="row text-center ">
                        <div className="row heading_top">
                            {/* <h2><i class="fas fa-tools"> Skills</i></h2> */}
                            <h2 className="heading_top" > Skills</h2>
                        </div>
                    </div>

                    <div className="row text-center mb-5 heading_para">
                        <div className="col">
                            <p>I believe in learning as much as possible, whenever possible and from whomever possible. <br>
                            </br>Through this ideology, I have gathered a lot of technical skills throughout my programming journey.</p>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col-md-3 col-12 skill_border" style={{ border: "2px solid #3498db" }}>
                            <div className="row ">
                                <div className="col-2">
                                    <img className="img-fluid" src={Development} alt="Skill_fr_img" />
                                </div>
                                <div className="col-md-8 col-8 " style={{ border: "2px solid rd" }}>
                                    <h4> Programming Language <br></br>C++/Java</h4>
                                </div>
                            </div>
                        </div>

                        <div className=" col-md-3 col-12  skill_border" style={{ border: "2px solid #3498db" }}>
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid" src={Competitive} alt="Skill_fr_img" />
                                </div>
                                <div className="col-md-8 col-8">
                                    <h4> Web Development <br></br><span className="span">(HTML / CSS / Bootstrap5)</span></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-12 skill_border" style={{ border: "2px solid #3498db" }}>
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid" src={Reacts} alt="Skill_fr_img" />
                                </div>
                                <div className="col-md-8 col-8">
                                    <h4> React <br></br>React.js</h4>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="row justify-content-md-center">
                        <div className="col-md-3 col-12 skill_border " style={{ border: "2px solid #3498db" }}>
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid" src={Database} alt="Skill_fr_img" />
                                </div>
                                <div className="col-md-8 col-8" style={{ border: "2px solid rd" }}>
                                    <h4> Database <br></br>MySQL</h4>

                                </div>
                            </div>
                        </div>

                        <div className=" col-md-3 col-12  skill_border " style={{ border: "2px solid #3498db" }}>
                            <div className="row">
                                <div className="col-2">
                                    <img className="img-fluid" src={PHP} alt="Skill_fr_img" />
                                </div>
                                <div className="col-md-8 col-8">
                                    <h4>Backened<br></br><span className="span">PHP</span></h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;
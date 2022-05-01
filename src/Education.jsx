import React from "react";
import Collage from "./images/collage.png";
import School from "./images/school.png";


const Education = () => {
    return (
        <>
            <section  id="section-2" className="education mt-5 mb-5 "
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <div className="container text-center" style={{ border: "2px solid rd" }}>

                    <div className="row mb-3 ">
                        <div className="col">
                            <h1 className="heading_top">Education</h1>
                        </div>
                    </div>

                    <div className="row text-center mb-5 heading_para">
                        <div className="col">
                            <p>Proper eduacation guided me as good person and a true competitor .
                                <br></br>
                                It teaches me to think intensively and to think critically
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 col-12">
                            <img className="img-fluid" src={Collage} alt="collage_img" height={100} width={100} />
                        </div>
                        <div className="col-md-11 col-12">
                            <h2>University Institute Of Engineering And Technology,Kanpur</h2>
                            <h4>Bachelor Of Technology in Computer Science And Engineering</h4>
                            <h5>August 2019 - Present</h5>
                            <h6>CPI : 9.2</h6>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row mt-2 ">
                        <div className="col-md-1">
                            <img className="img-fluid" src={School} alt="collage_img" height={100} width={100} />
                        </div>
                        <div className="col-md-11">
                            <h2>D.A.V Senior Secondary Public School, khadia, Shaktinagar</h2>
                            <h4>Higher Secondary</h4>
                            <h5>July 2017 - March 2019</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Education;
import React from "react";
import { a } from "react-router-dom";
import contact from "./images/Contact.svg";


const Contact = () => {
    return (
        <>
            <section className="contact mt-5 mb-5" data-aos="zoom-in" id="section-7">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 col-12  order-2 order-md-1 vertically_center ">
                            <h5 className="heading_top">Connect With Me ... </h5>
                            <a className="btn btn-get-started mt-2" href="mailto:nrastogi941@gmail.com" target="_blank"> Send Email <i class="fas fa-arrow-right"></i> </a>
                            <div className="contact-icons">
                                <span><a className="" href="https://www.instagram.com/nimitrastogi/" target="_blank"><i class="fab fa-instagram" style={{ backgroundColor: "#833AB4" }}></i></a></span>
                                <span><a className="" href="" target="_blank"><i class="fab fa-discord" style={{ backgroundColor: "#5865F2" }}></i></a></span>
                                <span><a className="" href="https://www.linkedin.com/in/nimit-rastogi-57b0441bb/" target="_blank"><i class="fab fa-linkedin" style={{ backgroundColor: "#0082ca" }}></i></a></span>
                                <span><a className="" href="https://github.com/nrastogi941" target="_blank"><i class="fab fa-github" style={{ backgroundColor: "#333333" }}></i></a></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-1 mb-5">
                            <img src={contact} className="contact_img" alt="contact_img" height={250} width={250} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
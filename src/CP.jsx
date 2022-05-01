import React from "react";
import Codeforces from "./images/codeforces.png";
import Codechef from "./images/codechef.jpg";
import { NavLink } from "react-router-dom";

const CP =()=>{
    return(
        <>
        <section  id="section-5"  className="CP mt-5" data-aos="fade-right">
        <div className="container text-center">
        <div className="row">
            <div className="col">
                <h5 className="heading_top ">Competitive Programming</h5>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col heading_para">
                <p className="">With the aim of improving my coding skill .I practiced and  solved more than 500+ coding question <br></br>as well as participated in cp contest
on different competitive programming website.</p>
            </div>
        </div>

        <div className="row justify-content-md-center mt-4">
            <div className="col-md-4 CP-card mt-4" >
                <div className="card">
                    <div className="card-body ">
                        <img src={Codeforces} className="img-fluid CP-img" alt="codeforces" height={120} width={120}/>
                        <a href="https://codeforces.com/profile/nrastogi941" target="_blank"><h5 className="card-title">nrastogi941</h5></a>
                        <p className="card-text">Highest-rating:1021</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 CP-card mt-4">
            <div className="card">
                    <div className="card-body">
                        <img src={Codechef} className="img-fluid CP-img" alt="codechef" height={310} width={310} />
                        <a href="https://www.codechef.com/users/nrastogi941" target="_blank"><h5 className="card-title">nrastogi941</h5></a>
                        <p className="card-text">Highest-rating:1668</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </section>
        </>
    );
}

export default CP;
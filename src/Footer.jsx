import React from "react";
import { NavLink } from "react-router-dom";

const Footer =()=>{
    return(
        <>
        <footer className="footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <span><i class="far fa-copyright"> Copyright 2022</i> | ❤️ <NavLink className="footer-my-name" to="#">Nimit Rastogi</NavLink></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Made with 🍕,in Parallel Universe</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}


export default Footer;
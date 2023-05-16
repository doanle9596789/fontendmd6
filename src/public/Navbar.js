import React from "react";

export default function Navbar(){
    return(
        <section id="header" className="cd-secondary-nav">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#dropdown-thumbnail-preview">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><span className="well_1"><i
                                className="fa fa-home"></i></span>ESTATE</a>
                        </div>
                        <div className="collapse navbar-collapse" id="dropdown-thumbnail-preview">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#"
                                                          className="hvr-underline-from-center">HOME</a></li>
                                <li><a href="#" className="hvr-underline-from-center">ABOUT</a></li>
                                <li className="dropdown">
                                    <a href="#" className="hvr-wobble-to-top-right"
                                       data-toggle="dropdown">PROPERTY <b
                                        className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li className="tell_1"><a href="#">PROPERTY LISTING</a></li>
                                        <li className="tell_1"><a href="#">PROPERTY DETAILS</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="hvr-wobble-to-top-right"
                                       data-toggle="dropdown">TEAM <b
                                        className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li className="tell_1"><a href="#">TEAM LISTING</a></li>
                                        <li className="tell_1"><a href="#">TEAM DETAILS</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="hvr-wobble-to-top-right"
                                       data-toggle="dropdown">BLOG<b
                                        className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li className="tell_1"><a href="#">BLOG LISTING</a></li>
                                        <li className="tell_1"><a href="#">BLOG DETAILS</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="hvr-underline-from-center">CONTACT</a></li>
                                <li className="dropdown">
                                    <a href="#" className="hvr-wobble-to-top-right" data-toggle="dropdown">DROPDOWN <b
                                        className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li className="tell_1"><a href="#">GALLERY</a></li>
                                        <li className="tell_1"><a href="#">ABOUT</a></li>
                                        <li><a href="#">SERVICES</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </section>
    )
}
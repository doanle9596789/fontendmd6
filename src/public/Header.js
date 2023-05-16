import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <section id="header_main" className="clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 space_all">
                        <div className="col-sm-4 space_all">
                            <div className="header_main_1">
                                <ul>
                                    <li><i className="fa fa-phone"></i><a href="#">+123 456 78 90</a></li>
                                    <li><i className="fa fa-envelope"></i><a href="#">info@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 space_all">
                            <div className="header_main_2">
                                <div id="custom-search-input">
                                    <div className="input-group col-md-12">
                                        <input type="text" className="  search-query form-control"
                                               placeholder="Search"/>
                                        <span className="input-group-btn">
                                    <button className="btn btn-danger" type="button">
                                        <span className=" glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="header_main_4">
                                <ul className="nav navbar-nav navbar nav_2">
                                    <div className="login">
                                        <ul className="nav-login">
                                            <li className="tell_main_8">
                                                <Link to={"/login"}>Login</Link>
                                            </li>
                                            <li  className="tell_main_8">
                                                <Link to={"/register"}>Register</Link>

                                            </li>
                                        </ul>
                                    </div>


                                    <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content modal-info">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">×</span></button>
                                                </div>
                                                <div className="modal-body modal-spa">
                                                    <div className="login-grids">
                                                        <div className="login-right">
                                                            <form action="#" method="post">
                                                                <h3>Create your account </h3>
                                                                <input type="text" value="Name" name="Name"
                                                                       onFocus="this.value = '';"
                                                                       onBlur="if (this.value == '') {this.value = 'Name';}"
                                                                       required=""/>
                                                                <input type="text" value="Mobile number"
                                                                       name="Mobile number"
                                                                       onFocus="this.value = '';"
                                                                       onBlur="if (this.value == '') {this.value = 'Mobile number';}"
                                                                       required=""/>
                                                                <input type="text" value="Email id"
                                                                       name="Email id"
                                                                       onFocus="this.value = '';"
                                                                       onBlur="if (this.value == '') {this.value = 'Email id';}"
                                                                       required=""/>
                                                                <input type="password" value="Password"
                                                                       name="Password"
                                                                       onFocus="this.value = '';"
                                                                       onBlur="if (this.value == '') {this.value = 'Password';}"
                                                                       required=""/>
                                                                <input type="submit"
                                                                       value="CREATE ACCOUNT"/>
                                                            </form>
                                                        </div>
                                                        <p>By logging in you agree to
                                                            our <span>Terms and Conditions</span> and
                                                            <span>Privacy Policy</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 space_all">
                            <div className="header_main_3">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facbook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

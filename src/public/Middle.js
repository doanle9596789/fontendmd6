import React from "react";
export  default  function Middle(){
    return(
        <section id="middle">
            <div className="container">
                <div className="row">
                    <div className="middle_1">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <div className="middle_2 clearfix">
                                <div className="col-sm-12">
                                    <div className="middle_main clearfix">
                                        <h3>PROPERTY SEARCH</h3>
                                        <div className="line_center line width-50 clearfix">
                                            <div className="line_inner width-70 clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="middle_3">
                                            <div className="controls clearfix">
                                                <select className="span3" name="expiry_month" id="expiry">
                                                    <option>Location</option>
                                                    <option value="01">Alabama</option>
                                                    <option value="02">Alaska</option>
                                                    <option value="03">California</option>
                                                    <option value="04">Colorado</option>
                                                    <option value="05">Delaware</option>
                                                    <option value="06">District of Columbia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="middle_3">
                                            <div className="controls clearfix">
                                                <select className="span3" name="expiry_month" id="expiry_">
                                                    <option>Bedroom</option>
                                                    <option value="01">1</option>
                                                    <option value="02">2</option>
                                                    <option value="03">3</option>
                                                    <option value="04">4</option>
                                                    <option value="05">5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="middle_3">
                                            <input type="text" className="form-control" name="First Name"
                                                   placeholder="Squre Fit Min" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="middle_4">
                                            <div className="controls clearfix">
                                                <select className="span3" name="expiry_month" id="expiry_monh">
                                                    <option>Property Status</option>
                                                    <option value="01">For Sale</option>
                                                    <option value="02">For Rent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="middle_4">
                                            <div className="controls clearfix">
                                                <select className="span3" name="expiry_month" id="expiry_month">
                                                    <option>Bathroom</option>
                                                    <option value="01">1</option>
                                                    <option value="02">2</option>
                                                    <option value="02">3</option>
                                                    <option value="02">4</option>
                                                    <option value="02">5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="middle_4">
                                            <input type="text" className="form-control" name="First Name"
                                                   placeholder="Squre Fit Min" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="middle_5 clearfix">
                                            <p><a href="#" className="button">Search</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

)
}
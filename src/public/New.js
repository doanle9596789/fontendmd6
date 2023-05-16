import React from "react";
export default function New(){
    return(
        <section id="news">
            <div className="news_main clearfix">
                <div className="container">
                    <div className="row">
                        <div className="news_1 clearfix">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="news_2">
                                    <h2>SUBSCRIBE<a href="#"> NEWSLETTER</a></h2>
                                    <p>consectetur adipisicing elit. Beatae ducimus in enim quae</p>
                                </div>
                                <div className="news_3">
                                    <div className="input-group" id="adv-search">
                                        <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                            <div className="input-group-btn">
                                                <div className="btn-group" role="group">
                                                    <button type="button" className="btn btn-primary">SUBSCRIBE</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
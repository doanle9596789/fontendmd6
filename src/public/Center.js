import React from "react";
export default function Center(){
    return(
        <section id="center">
            <div className="center">
                <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000"
                     id="bs-carousel">
                    <div className="overlay"></div>
                    <ol className="carousel-indicators">
                        <li data-target="#bs-carousel" data-slide-to="0" className=""></li>
                        <li data-target="#bs-carousel" data-slide-to="1" className=""></li>
                        <li data-target="#bs-carousel" data-slide-to="2" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item slides">
                            <div className="slide-1"></div>
                            <div className="hero">
                                <hgroup>
                                    <h1>Sed Dignissim Lacinia</h1>
                                    <h3>Vestibulum Lacinia Arcu Eget</h3>
                                    <h4><a href="#">CONUDIA NOSTRA</a></h4>
                                </hgroup>
                            </div>
                        </div>
                        <div className="item slides">
                            <div className="slide-2"></div>
                            <div className="hero">
                                <hgroup>
                                    <h1>Torquent Per Conubia Nostra</h1>
                                    <h3>Vestibulum Lacinia Arcu Eget</h3>
                                    <h4><a href="#">CONUDIA NOSTRA</a></h4>
                                </hgroup>
                            </div>
                        </div>
                        <div className="item slides active">
                            <div className="slide-3"></div>
                            <div className="hero">
                                <hgroup>
                                    <h1>Fusce Nec Tellus Sed Augue</h1>
                                    <h3>Vestibulum Lacinia Arcu Eget</h3>
                                    <h4><a href="#">CONUDIA NOSTRA</a></h4>
                                </hgroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Center from "./Center";
import Middle from "./Middle";
import Available from "./Available";
import Book from "./Book";
import Property from "./Property";
import {Out} from "./Out";
import OutBlog from "./OutBlog";
import New from "./New";
import Footer from "./Footer";
export default function HomePage(){
    return( <>
<Header/>
        <Navbar/>
        <Center/>
        <Middle/>
        <Available/>
        <Book/>
            <Property/>
            <Out/>
            <OutBlog/>
            <New/>
            <Footer/>
        </>)


}
import React from "react";
import Navbar from "./Navbar";
import Footer from "./page/Footer";


const Layout = ({children})=>{
    return(
    <div className="min-h-min flex flex-col  relative">
        <Navbar/>
        {children}
        <Footer/>
    </div>
    )
}

export default Layout;
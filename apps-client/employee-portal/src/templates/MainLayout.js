
import React, { Component } from 'react'
import Header from './Header';
import SideBar from "./Sidebar";
import Footer from './Footer';

export default ({ children }) => (
    <>
        <div>
            <Header />
            <SideBar />
            {/* <div className="mainContainer"> */}
                {children}
            {/* </div> */}
            <Footer />
        </div>
    </>
);
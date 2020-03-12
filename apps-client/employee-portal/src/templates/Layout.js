import React, { Component } from 'react'
import Header from './Header';
import SideBar from "./Sidebar";
import Footer from './Footer';


const LoginLayout = ({ children }) =>
  <div className="gray-bg">
    <div className="loginColumns animated fadeInDown">
      {children}
    </div>
  </div>;

const MainLayout = ({ children }) =>
  <div id="wrapper">
    <Header />
    <SideBar  {...children} />
    <div id="page-wrapper">
      <div className="wrapper wrapper-content animated fadeInRight">
        {children}
      </div>
    </div>
    <Footer />
  </div>

export { LoginLayout, MainLayout };

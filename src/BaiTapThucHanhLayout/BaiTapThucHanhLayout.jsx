import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import PageContent from "./PageContent";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <PageContent />
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import { databt } from "./databt";
export default class BaiTapLayoutComponent extends Component {
  renderBT = () => {
    return databt.map((item, index) => {
      return (
        <div key={index} className="card text-left col-4 row-3 g-5">
          <div className="card-body">
            <div className="card-title">{item.title}</div>
            <div className="card-text">{item.desc}</div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="header bg-dark text-white text-center p-3 mb-5">
          <div className="container">
            <div className="d-flex justify-content-around ">
              <p>Start Bootstrap</p>
              <a href="#" className="text-white">
                Home
              </a>
              <a href="#" className="text-white">
                About
              </a>
              <a href="#" className="text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="banner d-flex justify-content-center mb-1">
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body justify-content-center">
              <h5 className="card-title text-center">A warm welcome!</h5>
              <p className="card-text">
                Bootstrap utility classes are used to create this jumbotron
                since the old component has been removed from the framework. Why
                create custom CSS when you can use utilities?
              </p>
              <div className="row justify-content-center">
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary">Call to Action</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 p-5">{this.renderBT()}</div>
        <div className="footer bg-dark text-white text-center p-5">
          Copyright © Your Website 2023
          <i className="bi bi-collection text-white"></i>
        </div>
      </div>
    );
  }
}

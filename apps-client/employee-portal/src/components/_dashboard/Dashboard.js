import React from "react";
import{ BaseComponent } from "../baseComponent/BaseComponent";
import "./Dashboard.css"
export default class Dashboard extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="mainContainer">
            <div className="centerText">
            <h1>דף הבית</h1>
            </div>
          </div>
          
        );
    }
}

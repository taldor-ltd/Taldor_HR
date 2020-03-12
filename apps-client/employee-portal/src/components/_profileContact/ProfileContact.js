import React from "react";
import { BaseComponent } from "../baseComponent/BaseComponent";
import "./ProfileContact.css"

export default class ProfileContact extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mainContainer">
        <h1>פרופיל</h1>
      </div>
    );
  }
}

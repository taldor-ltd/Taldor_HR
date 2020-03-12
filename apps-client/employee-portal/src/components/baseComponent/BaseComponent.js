import React from "react";
import { loginService } from "../../services/login.service";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export class BaseComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
     
         return (
            <div></div>
     );
    }
}

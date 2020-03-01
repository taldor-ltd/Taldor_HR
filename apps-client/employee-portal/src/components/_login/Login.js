import React from "react";
import { loginService } from "../../services/login.service";
import { BaseComponent } from "../baseComponent/BaseComponent";
import { Redirect } from 'react-router-dom'

export default class Login extends BaseComponent {
    constructor(props) {
        // debugger;
        super(props);

        // reset login status
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.login(username, password);
        }
    }

    login(username, password) {
        loginService.login(username, password).then(response => {
            response.json()
                .then(body => {
                    if (response.status == 200) {
                        //Login Succeeded
                        alert("Login Succeeded");
                        localStorage.setItem('user', JSON.stringify(body.data));
                        this.props.history.push('/Dashboard')
                    }
                    else {
                        //Incorrect Username and Password
                        alert(body.message);
                    }
                });
        }).catch((reason) => {
            return reason.message;
        });
    }

    render() {
        const { username, password, submitted } = this.state;

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h2>התחברות</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="username">שם משתמש</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block">שדה חובה</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">סיסמא</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">שדה חובה</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right">התחבר</button>
                            {/* <button onClick={this.notify}>Notify</button> */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

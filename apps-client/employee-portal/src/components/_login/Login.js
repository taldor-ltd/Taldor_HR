import React from "react";
import { loginService } from "../../services/login.service";
import { BaseComponent } from "../baseComponent/BaseComponent";
import { Redirect } from 'react-router-dom';
import {zetaLogger} from "../../services/zeta_logger.service";

export default class Login extends BaseComponent {
    constructor(props) {
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
            zetaLogger.post('roi');
            return reason.message;
        });
    }

    render() {
        const { username, password, submitted } = this.state;

        return (

<div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">HR</h1>

            </div>
            <h3>ברוכים הבאים לפורטל עובדים</h3>
            <p>קצת מידע
            </p>
            <form className="m-t" name="form" onSubmit={this.handleSubmit}>
                         <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                     <input type="text" className="form-control" placeholder="שם משתמש"  name="username" value={username} onChange={this.handleChange} />
                                     {submitted && !username &&
                                         <div className="help-block">שדה חובה</div>
                                    }
                                 </div>
                         <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                     <input type="password" className="form-control" placeholder="סיסמא" name="password" value={password} onChange={this.handleChange} />
                                     {submitted && !password &&
                                         <div className="help-block">שדה חובה</div>
                                     }
                                 </div>
                         <button type="submit" class="btn btn-primary block full-width m-b">התחבר</button>
                     </form> 
        </div>
    </div>

// {/* 
//                     <div className="auth-wrapper">
//                         <div className="auth-inner">
//                             <h2>התחברות</h2>
//                             <form name="form" onSubmit={this.handleSubmit}>
//                                 <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
//                                     <label htmlFor="username">שם משתמש</label>
//                                     <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
//                                     {submitted && !username &&
//                                         <div className="help-block">שדה חובה</div>
//                                     }
//                                 </div>
//                                 <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
//                                     <label htmlFor="password">סיסמא</label>
//                                     <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
//                                     {submitted && !password &&
//                                         <div className="help-block">שדה חובה</div>
//                                     }
//                                 </div>
//                                 <div className="form-group">
//                                     <button className="btn btn-primary float-right">התחבר</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div> */}
//                     </div>

                    );
                }
            }

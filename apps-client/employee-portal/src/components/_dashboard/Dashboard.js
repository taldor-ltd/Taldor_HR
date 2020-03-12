import React from "react";
import { BaseComponent } from "../baseComponent/BaseComponent";
import "./Dashboard.css"

export default class Dashboard extends BaseComponent {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div className="row m-b-lg m-t-lg">

                    <div className="col-md-1">
                        <div className="profile-image">
                            <img src={require('../../assets/image/a4.jpg')} className="rounded-circle circle-border" alt="profile" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="profile-info">
                            <div>
                                <h2 className="no-margins">
                                    חן חדיו
            </h2>
                                <h4>מפתח Web</h4>
                                <small>
                                    חן חן חן חן
            </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <button type="button" className="btn btn-danger m-r-sm">12</button>
                                הודעות כלליות
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary m-r-sm">4</button>
                                פרויקטים
                            </td>
                            <td>
                                <button type="button" className="btn btn-info m-r-sm">5</button>
                               תגיות
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="btn btn-info m-r-sm">10</button>
                                נושאים פעילים
                            </td>
                            <td>
                                <button type="button" className="btn btn-success m-r-sm">7</button>
                                נושאים שטופלו
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger m-r-sm">21</button>
                                עדכונים
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <h3>קצת על חן</h3>

                                        <span className="small">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label><strong>שם הפרטי:</strong></label>
                                                </div>
                                                <div className="col-sm-2">
                                                    חן
                </div>
                                                <div className="col-sm-4">
                                                    <label><strong>שם משפחה:</strong></label>
                                                </div>
                                                <div className="col-sm-2">
                                                    חדיו
                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label><strong>תעודת זהות:</strong></label>
                                                </div>
                                                <div className="col-sm-2">
                                                    308470971
                </div>
                                                <div className="col-sm-4">
                                                    <label><strong>גיל:</strong></label>
                                                </div>
                                                <div className="col-sm-2">
                                                    28
                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label><strong>פלאפון:</strong></label>
                                                </div>
                                                <div className="col-sm-2">
                                                    0544274942
                </div>
                                                <div className="col-sm-4">
                                                    <label><strong>שלוחה:</strong></label>
                                                </div>
                                                <div className="col-sm-2">
                                                    7545
                </div>
                                            </div>
                                        </span>
                                        <span className="small font-bold">
                                            <span><i className="fa fa-circle text-navy"></i> פעיל</span>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <h3>פרויקטים</h3>
                                        <h5>TTM</h5>
                                        <h5>כבאות</h5>
                                        <br />
                                        <br />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <h3>קבצים אחרונים</h3>
                                        <ul className="list-unstyled file-list">
                                            <li><a href=""><i className="fa fa-file"></i> טופס 101.docx</a></li>
                                            <li><a href=""><i className="fa fa-file-picture-o"></i> אישור מילואים.jpg</a></li>
                                        </ul>
                                    </div>



                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <h3>תגיות</h3>
                                        <div className="row">
                                        <ul className="tag-list">
                                            <li><a href=""><i className="fa fa-tag"></i> Angular</a></li>
                                            <li><a href=""><i className="fa fa-tag"></i> React</a></li>
                                            <li><a href=""><i className="fa fa-tag"></i> Web Api</a></li>
                                            <li><a href=""><i className="fa fa-tag"></i> C#</a></li>
                                        </ul>
                                        </div>
                                        <div className="row">
                                        <ul className="tag-list">
                                            <li><a href=""><i className="fa fa-tag"></i> .NET</a></li>
                                            <li><a href=""><i className="fa fa-tag"></i> AngularJS</a></li>
                                            <li><a href=""><i className="fa fa-tag"></i> CRM</a></li>
                                            <li><a href=""><i className="fa fa-tag"></i> SQL</a></li>
                                        </ul>
                                        </div>
                                       
                                    </div>



                                </div>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-6">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <h3>הודעה פרטית למשאבי אנוש</h3>

                                        {/* <p class="small">
                                שלח הודעה למשאבי אנוש
                            </p> */}

                                        <div className="form-group">
                                            <label>נושא ההודעה</label>
                                            <input type="email" className="form-control" placeholder="נושא ההודעה" />
                                        </div>
                                        <div className="form-group">
                                            <label>תוכן ההודעה</label>
                                            <textarea className="form-control" placeholder="תוכן ההודעה" rows="2"></textarea>
                                        </div>
                                        <button className="btn btn-primary btn-block">שלח</button>

                                    </div>



                                </div>







                            </div>
                            <div className="col-sm-6">
                                <div className="ibox">
                                    <div className="ibox-content">
                                    <h3>שפות פיתוח</h3>

                                    <small>רשימת שפות הפיתוח</small>


                                    <ul className="list-group clear-list m-t">

                                            <li className="list-group-item fist-item">
                                                <span className="label label-success">1</span> Angular
                            </li>
                                            <li className="list-group-item">
                                                <span className="label label-info">2</span> React
                            </li>
                                            <li className="list-group-item">
                                                <span className="label label-primary">3</span> Node
                            </li>
                                            <li className="list-group-item">

                                                <span className="label label-default">4</span> .NET
                            </li>
                                            <li className="list-group-item">
                                                <span className="label label-primary">5</span> SQL
                            </li>
                            
                                        </ul>

                                  

                                    </div>



                                </div>







                            </div>

                        </div>




                    </div>

                    <div className="col-sm-4">
                        <div id="vertical-timeline" className="vertical-container light-timeline no-margins">
                            <div className="vertical-timeline-block">
                                <div className="vertical-timeline-icon navy-bg">
                                    <i className="fa fa-briefcase"></i>
                                </div>

                                <div className="vertical-timeline-content">
                                    <h2>אישור מחלה</h2>
                                    <p>מצורף לתוכן ההודעה אישור המחלה לתאריכים - 01.03.20- 02.03.20
                                </p>
                                    <a href="#" className="btn btn-sm btn-primary">מידע נוסף</a>
                                    <span className="vertical-date">
                                        היום <br />
                                        <small>05 מרץ</small>
                                    </span>
                                </div>
                            </div>

                            <div className="vertical-timeline-block">
                                <div className="vertical-timeline-icon blue-bg">
                                    <i className="fa fa-file-text"></i>
                                </div>

                                <div className="vertical-timeline-content">
                                    <h2>אישור מילואים</h2>
                                    <p>ציפרתי את אישור המילואים בין 20.2 -26.2</p>
                                    <a href="#" className="btn btn-sm btn-success">הורדת הקובץ</a>
                                    <span className="vertical-date">
                                        אתמול <br />
                                        <small>במרץ 04</small>
                                    </span>
                                </div>
                            </div>

                            <div className="vertical-timeline-block">
                                <div className="vertical-timeline-icon lazur-bg">
                                    <i className="fa fa-coffee"></i>
                                </div>

                                <div className="vertical-timeline-content">
                                    <h2>השלמת טופס 101</h2>
                                    <p>טרם השלמת את טופס 101 אנא השלם אותו עד לתאריך 10.03.20</p>
                                    <a href="#" className="btn btn-sm btn-info">מידע נוסף</a>
                                    <span className="vertical-date"> אתמול <br /><small>מרץ 04</small></span>
                                </div>
                            </div>

                            <div className="vertical-timeline-block">
                                <div className="vertical-timeline-icon navy-bg">
                                    <i className="fa fa-comments"></i>
                                </div>

                                <div className="vertical-timeline-content">
                                    <h2>תלוש שכר במייל</h2>
                                    <p>ניתן לצפות בתלוש השכר של מרץ דרך הקישור</p>
                                    <span className="vertical-date">אתמול <br /><small>במרץ 04</small></span>
                                    <a href="#" className="btn btn-sm btn-danger">לצפייה בקובץ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

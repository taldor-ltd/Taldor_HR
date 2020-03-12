import React, { Component } from 'react';
import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        selected: 'home',
        expanded: false
    };

    render() {
        return (
            <div className={(this.state.expanded ? 'appExpanded' : '')}>
            <SideNav
            onSelect={(selected) => {
                    this.setState({ selected: selected });
                    let pageRoute = '/' + selected;
                    this.props.props.history.push(pageRoute);
                }}
                onToggle = {(expanded) => {
                    this.setState({ expanded: expanded });
                }
            }
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="Dashboard">
                    <NavItem eventKey="Dashboard">
                        <NavIcon>
                       <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            בית
            </NavText>
                    </NavItem>

                    <NavItem eventKey="ProfileContact">
                        <NavIcon>
                      <i className="fa fa-fw fa-address-card" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        פרופיל אישי
                           
            </NavText>
                    </NavItem>

                    <NavItem eventKey="employees">
                        <NavIcon>
                            <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            עובדים
            </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                ספר טלפונים
                </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                עובדים 2
                </NavText>
                        </NavItem>
                    </NavItem>

                    <NavItem eventKey="management">
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            ניהול
            </NavText>
                    </NavItem>


                </SideNav.Nav>
            </SideNav>
            </div>
        );
    }
};

export default Sidebar;
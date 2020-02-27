import React, { Component } from 'react';
import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles.css';

export default props => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        בית
            </NavText>
                </NavItem>

                <NavItem eventKey="profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-address-card" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        פרופיל אישי
            </NavText>
                </NavItem>


                <NavItem eventKey="users">
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
    );
};

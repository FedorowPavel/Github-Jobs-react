import React from 'react';

import Logo from "../components/Logo";
import Header from "./Header";
import HeaderSearch from "../components/HeaderSearch";


function Layout() {
    return (
        <>
            <Header>
                <Logo/>
                <HeaderSearch/>
            </Header>
        </>
    );
}

export default Layout;
import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <Link to="/category">
                    Category
                </Link>
                |
                <Link to="/product">
                    Product
                </Link>
                |
                <Link to="/post">
                    Post
                </Link>
                |
                <Link to="/advanced_form">
                    Advanced Form
                </Link>
            </nav>
            <hr/>
            <Outlet/>
        </div>
    );
}

export default Layout;
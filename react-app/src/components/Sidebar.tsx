import {Link} from 'react-router-dom'

export const Sidebar = () => {
    return (
        <ul>
            <li>
                {/* <a href='/' class='nav-link'>Homepage</a>*/}
                <Link to='/' className='nav-link'>Homepage</Link>
            </li>
            <li>
                {/* <a href='/orders' class='nav-link'>Orders</a>*/}
                <Link to='/orders' className='nav-link'>Orders</Link>
            </li>
            <li>
                {/* <a href='/products' class='nav-link'>Products</a>*/}
                <Link to='/products' className='nav-link'>Products</Link>
            </li>
            <li>
                {/* <a href='/customers' class='nav-link'>Customers</a>*/}
                <Link to='/customers' className='nav-link'>Customers</Link>
            </li>
        </ul>
    )
}
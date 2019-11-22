import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => (
    <div>
        <h1>Home</h1>
        <Link to='/profile'>Profile</Link>
        <Link to='/'>home</Link>
    </div>);

export default Home;

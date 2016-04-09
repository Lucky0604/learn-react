'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>React, React router, and flux for ultra responsive web app</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn</Link>
            </div>
        )
    }
}

export default Home;

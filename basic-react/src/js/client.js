import React from 'react';
import ReactDOM from 'react-dom';
// import Layout from './components/Layout';

/**
react router
**/
import Layout from './pages/Layout';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Featured from './pages/Featured';
import Settings from './pages/Settings';
import Archives from './pages/Archives';

// class LayOut extends React.Component {
//     constructor() {
//         super();
//         this.name = "Lucky"
//     }
//
//     /*
//     getVal(val) {
//         return "lucky" + val;
//     }
//     */
//
//     render() {
//         //const name = "Lucky";
//         return (
//             <h1>It's {this.name}</h1>
//             // <h1>It's {this.getVal(1)}</h1>
//
//         )
//     }
// }

const app = document.getElementById('app')

// ReactDOM.render(
//     <Layout />,
//     app
// )

//-----------------------------------------
// router render
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" component={Archives} name="archives"></Route>
            <Route path="settings" component={Settings} name="settings"></Route>
        </Route>
    </Router>,
        app
)

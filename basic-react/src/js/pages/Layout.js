import React from 'react';
import {Link} from 'react-router';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav'

class Layout extends React.Component {
    // navigate() {
    //     console.log(this.props);
    //     // pushState is deprecated, use push instead
    //     // this.props.history.pushState(null, '/');
    //     this.props.history.push('/');
    // }

    render() {
        // const {history} = this.props;
        // console.log(history.isActive('archives'));
        // return (
        //     <div>
        //         <h1>KillerNews.net</h1>
        //         {this.props.children}
        //         <Link to="archives" className="btn btn-danger" activeClassName="active">archives</Link>
        //         <Link to="settings" activeClassName="active"><button className="btn btn-success">settings</button></Link>
        //         <button onClick={this.navigate.bind(this)}>featured</button>
        //     </div>
        // )

        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        }

        return (
            <div>
                <Nav location={location} />
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>KillerNews.net</h1>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )

    }
}

export default Layout;

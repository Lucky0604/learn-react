import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component{

    // state
    /**
    constructor() {
        super();
        this.state = {
            name: 'Lucky Test'
        }
    }
    render() {
        setTimeout(() => {
            this.setState({name: 'Bob'});
        }, 5000)
        return (
            <div>
                {this.state.name}
                <Header />
                <Footer />
            </div>

        )
    }
    */
    constructor() {
        super();
        this.state = {
            title: 'Welcome!'
        }
    }

    changeTitle(title) {
        this.setState({
            title: title
        })
    }


    // props
    render() {
        return (
            <div>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
                <Header title={"other title"}/>
                <Footer />
            </div>
        )
    }
}

export default Layout;

import React from 'react';
import Title from './Header/Title'
class Header extends React.Component{
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <Title title={this.props.title}/>
                <input onChange={this.handleChange.bind(this)} value={this.props.title}/>
            </div>
        )
    }
}

export default Header;
